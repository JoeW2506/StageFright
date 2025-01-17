Math.clamp = (Number, Minimum, Maximum) => Math.min(Math.max(Number, Minimum), Maximum)
Math.nzoSoftClamp = (Number, Minimum, Maximum, Base) => (Maximum - Minimum) / (1 + Math.pow(Base, -Base * Number)) + Minimum // Non zero offset

class Vector2 
{
    constructor(X, Y)
    {
        this.X = X; this.Y = Y
    }
}