AFRAME.registerComponent('car', {
  schema: {
    movementDistance: { type: 'number', default: 1 }
  },

  init: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
  },

  onClick: function () {
    var position = this.el.getAttribute('position');
    var rotation = this.el.getAttribute('rotation');
    var angle = THREE.Math.degToRad(rotation.y);

    var deltaX = -Math.sin(angle) * this.data.movementDistance;
    var deltaZ = -Math.cos(angle) * this.data.movementDistance;

    var newPosition = {
      x: position.x + deltaX,
      y: position.y,
      z: position.z + deltaZ
    };

    this.el.setAttribute('position', newPosition);
  }
});
