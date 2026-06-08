$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(500, 0, 20, 290, "pink");
      createPlatform(200,500,300, 100, "pink");
      createPlatform(600,700,100,100, "pink");
      createPlatform(700,600,100,150, "pink");
      createPlatform(800,500,100,100, "pink");
      createPlatform(1000,400,200,100, "pink");
    // TODO 3 - Create Collectables
    createCollectable("database", 200, 170, 0.5, 0.7);
    createCollectable("steve",1100, 300, 0.5, 0.7); 
    createCollectable("kennedi",800, 400, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("right", 300, 200);
    createCannon("top",500, 4000);
    createCannon("bottom",500, 4000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
