import pandas as pd

data = pd.read_csv('evacuation_data.csv')
data.drop_duplicates(inplace=True)
data.dropna(inplace=True)
data['severity'] = data['severity'].astype(int)
data['timestamp'] = pd.to_datetime(data['timestamp'])
data.to_csv('processed_data.csv', index=False)
