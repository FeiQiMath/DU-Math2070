var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "basic-concepts",
  "level": "1",
  "url": "basic-concepts.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Concepts",
  "body": " Basic Concepts  A differential equation is an equation concerning derivatives. Here is the typical form of a first-order ordinary differential equation (ODE): that is usually abbreviated as where    is the independent variable.    is a one-variable function depending on .    is the derivative of .    is a known function of two variables.    This ODE expresses the derivative in terms of .  A function defined on an interval satisfying the equation is called a solution .  While we haven't learned how to solve an ODE, it is easy to check if a function is a solution of an ODE. Simply compute its derivatives, then plug in the ODE, and see if equality holds.   A solution of an ODE    is a solution of the ODE , because ,   .     A non-solution of an ODE    is not a solution of the ODE , because ,   .    We shall apply this method extensively in this course.  The most general form of a first-order ODE is More presicely, it is a relation among the variable and .  The order of a differential equation is the order of the highest derivative appearing in the equation. Similarly, the most general form of an -th order ODE is    Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).      An ODE is an equation involving ordinary derivatives. A Partial Differential Equation (PDE) is an equation concerning partial derivatives.   Example of a PDE   A harmonic function in two variables are defined by the PDE We shall not require PDEs in this course.    "
},
{
  "id": "basic-concepts-2",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "typical form "
},
{
  "id": "basic-concepts-5",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "basic-concepts-7",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-7",
  "type": "Example",
  "number": "1.1.1",
  "title": "A solution of an ODE.",
  "body": " A solution of an ODE    is a solution of the ODE , because ,   .   "
},
{
  "id": "basic-concepts-8",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-8",
  "type": "Example",
  "number": "1.1.2",
  "title": "A non-solution of an ODE.",
  "body": " A non-solution of an ODE    is not a solution of the ODE , because ,   .   "
},
{
  "id": "basic-concepts-11",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "basic-concepts-12",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-12",
  "type": "Example",
  "number": "1.1.3",
  "title": "Examples of ODEs in typical and general forms.",
  "body": " Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).     "
},
{
  "id": "basic-concepts-14",
  "level": "2",
  "url": "basic-concepts.html#basic-concepts-14",
  "type": "Example",
  "number": "1.1.4",
  "title": "Example of a PDE.",
  "body": " Example of a PDE   A harmonic function in two variables are defined by the PDE We shall not require PDEs in this course.   "
},
{
  "id": "why-study-DEs",
  "level": "1",
  "url": "why-study-DEs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Why study differential equations?",
  "body": " Why study differential equations?  The answer is simple: Differential equation is the foundation of science and technology.  Consider an object of temperature placed in a room of ambient temperature .  Newton's law of cooling: The rate of change of is proportional to the difference of the temperatures between the object and the ambient room.  Mathematically, this means where is some constant, is the ambient temperature.  If the ambient temperature is constant, then we may solve it by separating the variables:   .  "
},
{
  "id": "sec-logarithm",
  "level": "1",
  "url": "sec-logarithm.html",
  "type": "Section",
  "number": "1.3",
  "title": "Logarithms",
  "body": " Logarithms                               Use the Laws of Logarithms to expand the expression.                                                Use the Laws of Logarithms to combine the expression.             Simplify: .  (30) Show that .   "
},
{
  "id": "sec-HW1",
  "level": "1",
  "url": "sec-HW1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Homework 1",
  "body": " Homework 1   Draw the direction field for the following ODEs.              Classify the following differential equations by order and linearity.      The highest order of the derivative is 100. So the order is 100.  Set . Then clearly, and all of which are independent of and its derivatives. So the ODE is linear.       The highest order of the derivative is 3. So the order is 3.  Set . Then clearly, all of which are independent of and its derivatives. So the ODE is linear.       The highest order of the derivative is 1. So the order is 1.  Set . Then clearly, that depends on . So the ODE is nonlinear.       Check if the given functions are solutions to the corresponding ODEs.      Since , we have .  Plug in the ODE: , while . From the trig identity that , . So is a solution of the ODE.      Since , we have . Plug in the ODE: So is a solution of the ODE.     Since , we have Plug in the ODE: . So is a solution of the ODE.     Since , we have Plug in the ODE: . So is NOT a solution of the ODE.      Find the general solutions to the following ODEs and determine the long term behaviors of the solution.     The ODE is already in its standard form. We read that Compute the integrating factor  Formulate the general solution:  We focus on the numerator: So the general solution is      Obtain the standard form and read that Compute the integrating factor:  . Formulate the general solution      (Bonus) For the ODE Investigate the following sets of initial values What happens in each case? We first find the general solution. Start by the standard form So Compute the integrating factor  . Formulate and compute the general solution Now we investigate the initial conditions.  If , then . We obtained an equation that can never be satisfied. So the IVP with the initial condition has no solution.  If , then . We obtained an equation that is always satisfied no matter how is chosen. So the IVP with the initial condition has infinitely many solutions.     (no need to write) Review the techniques of integration and make sure you are comfortable to -substitution, integrating by parts and integration of .   "
},
{
  "id": "HW2",
  "level": "1",
  "url": "HW2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Homework 2",
  "body": " Homework 2    Find the solution of each of the following IVP.     The standard form of the ODE is So Compute the integrating factor:  Formulate and compute the general solution: Plug in the initial condition. So the solution of the IVP is      The standard form of the ODE is So Compute the integrating factor: Formulate the general solution: We focus on the numerator and perform integration by parts. So the general solution is Plug in the initial condition So the solution of the IVP is      The standard form of the ODE is So Compute the integrating factor:  Formulate and compute the general solution: We focus on the numerator and perform integration by parts. So the general solution is Plug in the initial condition So the solution of the IVP is       Find the solution of each of the following IVP that is continuous everywhere.            Find a one-parameter family of solutions of the following ODEs.               Find the solution of the following IVPs and the interval of existence.               "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
