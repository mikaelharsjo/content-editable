Polymer({
  /**
  * The `tooltip` attribute sets the text of a toltip.
  *
  * @attribute tooltip
  * @type string
  * @default 'Click to edit'
  */
  tooltip: 'Click to edit',
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
      this.fire('content-editable-changed', { text: text });
    }
  }
});
