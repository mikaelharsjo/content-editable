Polymer({
  ready: function() { //attached?
    this.tooltip = this.tooltip || 'Click to edit';
    var root = this.$;
    // move content from light dom to shadow root
    var nodes = root.mycontent.getDistributedNodes();
    [].forEach.call(nodes, function (node) {
      node.className = 'node';
      root.editable.appendChild(node);
    });
  },
  blur: function () {
    var nodes = this.$.editable.children, text;
    if (nodes.length > 0) {
      text = this.$.editable.children[0].innerHTML;
      this.fire('content-editable-changed', { text: text });
    }
  }
});
