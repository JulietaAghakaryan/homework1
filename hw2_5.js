
function treeNode(treeNodes) {
    const tree = {};
    treeNodes.forEach(element => {
        if(element.parent == null) {
        
            tree[element.id] = {};
            console.log(tree[element.id]);
        }
        else {
            const curr = ObjectByID(tree, element.parent);
            curr[element.id] = {};

        }  
    });

    return tree;
}

function ObjectByID(tree, parent) {
    if(tree.hasOwnProperty(parent)) {
        return tree[parent];
    }

    for(let property in tree) {

        return ObjectByID(tree[property], parent);
    }
}

array=[{parent: null, id : 0},
    {parent: 0, id : 1}, 
    {parent: 0, id : 2}, 
    {parent: 1, id : 3}, 
    {parent: 1, id : 4}, 
    {parent: 2, id : 5}, 
    {parent: 4, id : 6}]

console.log(treeNode(array));

