Polymer({
  tooltip: '',
  ready: function() { //attached?
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
      var detail = {
        text: text
      };
      if (this.propertyname) {
        detail.propertyName = this.propertyname;
      }
      this.fire('content-editable-changed', detail);
    }
  }
});
