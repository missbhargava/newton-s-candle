class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
            
        }
        this.Rope = Constraint.create(options);
        this.pointB= pointB
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB
        line (pointA.x, pointA.y, pointB.x, pointB.y)
       
    }
    
}