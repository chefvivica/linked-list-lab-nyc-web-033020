function getName(node){
  return node['name']
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let nextadd = node.next
  return collection[`${nextadd}`]
}

function nodeAt(index){
  
}