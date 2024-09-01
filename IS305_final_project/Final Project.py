import csv
import sqlite3
import os

def insert_data_from_csv(csv_filename):
    # Open the CSV file
    with open(csv_filename, newline='') as csvfile:
        csvreader = csv.DictReader(csvfile)
        
        # Debug: print the column names to ensure they match
        print("CSV Headers:", csvreader.fieldnames)

        # Connect to the SQLite database
        conn = sqlite3.connect('chicago_bears_history.db')
        cur = conn.cursor()

        # Insert each row into the bears_history table
        for row in csvreader:
            try:
                cur.execute('''
                    INSERT OR IGNORE INTO bears_history (
                        Year, Wins, Losses, Ties, PointsFor, PointsAgainst, Coach,
                        TopPasser, TopRusher, TopReceiver, OffensiveRank, DefensiveRank, OverallRank
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', (
                        row['Year'].strip(), row['W'].strip(), row['L'].strip(), row['T'].strip(), row['PF'].strip(), row['PA'].strip(),
                        row['Coaches'].strip(), row['Passer'].strip(), row['Rusher'].strip(), row['Receiver'].strip(),
                        row.get('Off Rank Pts', '').strip(), row.get('Def Rank Pts', '').strip(), row.get('Overall Rank', '').strip()
                    ))
            except KeyError as e:
                print(f"A KeyError occurred: {e}")
                print(f"Problematic row data: {row}")
        conn.commit()
        conn.close()
