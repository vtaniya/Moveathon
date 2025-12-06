import networkx as nx

G = nx.Graph()
G.add_edge('A', 'B', weight=5)
G.add_edge('B', 'C', weight=3)
G.add_edge('A', 'C', weight=10)

path = nx.dijkstra_path(G, source='A', target='C', weight='weight')
print("Evacuation Route:", path)
