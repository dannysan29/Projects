'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Investor {
  id: number;
  investment: number;
  return: number;
  month: number;
}

const PonziMechanics = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Sample data for visualization
    const data: Investor[] = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      investment: 1000 * (i + 1),
      return: 1000 * (i + 1) * 1.1,
      month: i + 1
    }));

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up the SVG dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Create the SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'bg-gray-800 rounded-lg');

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.month) || 0])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.investment) || 0])
      .range([height - margin.bottom, margin.top]);

    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).ticks(12))
      .attr('color', '#fff');

    // Add Y axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .attr('color', '#fff');

    // Add the investment line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#4CAF50')
      .attr('stroke-width', 2)
      .attr('d', d3.line<Investor>()
        .x(d => xScale(d.month))
        .y(d => yScale(d.investment))
      );

    // Add the return line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#FF5252')
      .attr('stroke-width', 2)
      .attr('d', d3.line<Investor>()
        .x(d => xScale(d.month))
        .y(d => yScale(d.return))
      );

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - margin.right - 100},${margin.top})`);

    legend.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 20)
      .attr('y2', 0)
      .attr('stroke', '#4CAF50')
      .attr('stroke-width', 2);

    legend.append('text')
      .attr('x', 30)
      .attr('y', 4)
      .text('Investments')
      .attr('fill', '#fff');

    legend.append('line')
      .attr('x1', 0)
      .attr('y1', 20)
      .attr('x2', 20)
      .attr('y2', 20)
      .attr('stroke', '#FF5252')
      .attr('stroke-width', 2);

    legend.append('text')
      .attr('x', 30)
      .attr('y', 24)
      .text('Returns')
      .attr('fill', '#fff');

  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PonziMechanics; 