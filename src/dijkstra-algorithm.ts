import { Graph } from 'graph-data-structure';

export const dijkstraAlgorithm = (
  graph: ReturnType<typeof Graph>,
  startId: string,
  endId: string,
): number => {
  const serializedGraph = graph.serialize();

  const costMap = new Map<string, number>([[startId, 0]]);
  const processedNodes = new Set<string>();

  const findMinimalUnprocessedNode = (): string | null => {
    let minPair: [string, number] | null = null;

    costMap.forEach((value, key) => {
      const minPairValue = minPair ? minPair[1] : Infinity;
      if (!processedNodes.has(key) && value < minPairValue)
        minPair = [key, value];
    });

    return minPair === null ? null : minPair[0];
  };

  let nodeToCheck: string | null = startId;
  while (nodeToCheck) {
    serializedGraph.links.forEach(({ source, weight, target }) => {
      if (source === nodeToCheck) {
        const targetWeight = costMap.get(target);
        const sumWeight = weight + (costMap.get(nodeToCheck) as number);
        if (!targetWeight || targetWeight > sumWeight) {
          costMap.set(target, sumWeight);
        }
      }
    });

    processedNodes.add(nodeToCheck);
    nodeToCheck = findMinimalUnprocessedNode();
  }

  return costMap.get(endId) as number;
};

const graphExample = Graph()
  .addEdge('start', 'a', 5)
  .addEdge('a', 'b', 4)
  .addEdge('b', 'end', 3)
  .addEdge('start', 'c', 2)
  .addEdge('c', 'd', 7)
  .addEdge('d', 'end', 1)
  .addEdge('c', 'a', 8)
  .addEdge('a', 'd', 2)
  .addEdge('b', 'd', 6);

const graphExample1 = Graph()
  .addEdge('start', 'a', 10)
  .addEdge('a', 'b', 20)
  .addEdge('b', 'end', 30)
  .addEdge('b', 'c', 1)
  .addEdge('c', 'a', 1);

const graphExample2 = Graph()
  .addEdge('start', 'a', 2)
  .addEdge('a', 'end', 2)
  .addEdge('start', 'b', 2)
  .addEdge('a', 'c', 2)
  .addEdge('b', 'a', 2)
  .addEdge('c', 'b', -1)
  .addEdge('c', 'end', 2);

console.log(
  dijkstraAlgorithm(graphExample, 'start', 'end') ===
    graphExample.shortestPath('start', 'end').weight,
);
console.log(
  dijkstraAlgorithm(graphExample1, 'start', 'end') ===
    graphExample1.shortestPath('start', 'end').weight,
);
console.log(
  dijkstraAlgorithm(graphExample2, 'start', 'end') ===
    graphExample2.shortestPath('start', 'end').weight,
);
