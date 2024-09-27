
function nodeObj(value, nextNode) {
  if (!(value)) {
    value = null;
  } else if (!(nextNode)) {
    nextNode = null;
  }
  this.value = value;
  this.nextNode = nextNode;

}

let linkedList = function() {

  let head = new nodeObj();

  let appendValue = function(value) {
    let newObj = new nodeObj(value);
    let endOfList = getTail();
    endOfList.nextNode = newObj;
  }

  let prependValue = function(value) {
    let newObj = new nodeObj(value);
    let beginningOfList = getHead();
    newObj.nextNode = beginningOfList;
    head = newObj;
  }

  let size = function() {
    let currentValue = head;
    let size = 0;

    while (!(currentValue == null)) {
      currentValue = currentValue.nextNode;
      size += 1;
    }
    console.log(size);
  }

  let getHead = function() {
    return head;
  }

  let getTail = function() {
    let currentValue = head;

    while (!(currentValue.nextNode == null)) {
      currentValue = currentValue.nextNode;
    }
    return currentValue;
  }

  let indexLocation = function(index) {
    let currentValue = head.value;
    let currentNode = head;
    let i = 0;

    while (i < index) {
      currentNode = currentNode.nextNode;
      currentValue = currentNode.value;
      i++;
    }
    console.log(currentValue);
  }

  let pop = function() {
    let currentHead = getHead();
    let tempNode = null;

    while (!(currentHead.nextNode == null)) {
      tempNode = currentHead;
      currentHead = currentHead.nextNode;
    }
    tempNode.nextNode = null;
  }

  let contains = function(value) {

  }

  let find = function(value) {

  }

  let toString = function() {
    let currentValue = head;

    while (!(currentValue == null)) {
      console.log(currentValue.value + " -> ");
      currentValue = currentValue.nextNode;
    }

  }
  return {
    appendValue:appendValue,
    prependValue:prependValue,
    size:size,
    getHead:getHead, 
    getTail:getTail,
    indexLocation:indexLocation,
    pop:pop,
    contains:contains,
    find:find,
    toString:toString
  }
}

const list = new linkedList();

list.prependValue("dog");
list.prependValue("cat");
list.prependValue("fish");
list.appendValue("bird");
list.appendValue("spiders");
list.size();
list.indexLocation(4);
list.pop();



list.toString();

