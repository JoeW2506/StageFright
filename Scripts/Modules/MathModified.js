Math.clamp = (Number, Minimum, Maximum) => Math.min(Math.max(Number, Minimum), Maximum)
Math.nzoSoftClamp = (Number, Minimum, Maximum, Base) => (Maximum - Minimum) / (1 + Math.pow(Base, -Base * Number)) + Minimum // Non zero offset
Math.factorial = (Number) =>  Math.sqrt(2 * Math.PI * Number) * Math.pow(Number / Math.E, Number) // Approximation

class Vector2 
{
    constructor(X, Y)
    {
        this.X = X; this.Y = Y
    }

    get Pythag() 
    {
        return Math.sqrt(this.X * this.X + this.Y * this.Y)
    }
}