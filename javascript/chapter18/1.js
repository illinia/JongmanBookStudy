function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word.charAt(i);
    let node = current.children[ch];
    if (node == null) {
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
}

Trie.prototype.search = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word.charAt(i);
    let node = current.children[ch];
    if (node == null) {
      return false;
    }
    current = node;
  }
  return current.endOfWord;
}

Trie.prototype.delete = function (word) {
  this.deleteRecursively(this.root, word, 0);
}

Trie.prototype.deleteRecursively = function (current, word, index) {
  if (index == word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;
    return Object.keys(current.children).length == 0;
  }
  let ch = word.charAt(index), node = current.children[ch];
  if (node == null) return false;

  let shouldDeleteCurrnetNode = this.deleteRecursively(node, word, index + 1);

  if (shouldDeleteCurrnetNode) {
    delete current.children[ch]
    return Object.keys(current.children).length == 0;
  }
  return false;
}

let trie = new Trie();
trie.insert('sammie');
trie.insert('simran');
console.log(trie.search('simran'));
trie.delete('sammie')
trie.delete('simran')
console.log(trie.search('sammie'))
console.log(trie.search('simran'))