// This is an example of creating a small TypeScript program.
interface Node {
    name: string;
}

class NodeManager {
    private nodes: Node[] = [];

    addNode(node: Node): void {
        this.nodes.push(node);
    }

    getNodeById(id: number): any | null {
        return this.nodes.find(n => n.id === id);
    }
}

const manager = new NodeManager();
manager.addNode({ name: 'Alice' });
console.log(manager.getNodeById(1).name); // Output: Alice
