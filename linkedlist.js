
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

  let prependValue = function(value) {
    let newObj = new nodeObj(value);
    let beginningOfList = getHead();
    newObj.nextNode = beginningOfList.value;
    head = newObj;
  }

  let size = function() {
  }

  let getHead = function() {
    return head;
  }

  let indexLocation = function() {

  }

  let pop = function() {

  }

  let contains = function(value) {

  }

  let find = function(value) {

  }

  let toString = function() {
    let currentValue = head.value;

    while (!(currentValue == null)) {
      console.log(currentValue + " -> ");
      currentValue = currentValue.nextNode;
    }

  }
  return {
    prependValue:prependValue,
    size:size,
    getHead:getHead,
    indexLocation:indexLocation,
    pop:pop,
    contains:contains,
    find:find,
    toString:toString
  }
}

const list = new linkedList();

list.prependValue("dog");


console.log(list.toString());

