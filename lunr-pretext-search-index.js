var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "sec-basic-concepts",
  "level": "1",
  "url": "sec-basic-concepts.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Concepts",
  "body": " Basic Concepts  A differential equation is an equation concerning derivatives. Here is the typical form of a first-order ODE , where ODE is the abbreviation for ordinary differential equation : With the abbreviation of and by and , respectively, where    is the independent variable.    is a one-variable function depending on .    is the derivative of .    is a known function of two variables.    This ODE expresses the derivative in terms of .  A function defined on an interval satisfying the equation is called a solution .  While we haven't learned how to solve an ODE, it is easy to check if a function is a solution of an ODE. Simply compute its derivatives, then plug in the ODE, and see if equality holds.   A solution of an ODE    is a solution of the ODE , because ,   .     A non-solution of an ODE    is not a solution of the ODE , because ,   .    We shall apply this method extensively in this course.  The most general form of a first-order ODE is More presicely, it is a relation among the variable and .  The order of a differential equation is the order of the highest derivative appearing in the equation. Similarly, the most general form of an -th order ODE is    Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).      An ODE is an equation involving ordinary derivatives. A Partial Differential Equation (PDE) is an equation concerning partial derivatives.   Example of a PDE   A harmonic function in two variables are defined by the PDE We shall not require PDEs in this course.    "
},
{
  "id": "sec-basic-concepts-2",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation typical form of a first-order ODE ODE ordinary differential equation "
},
{
  "id": "sec-basic-concepts-5",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "sec-basic-concepts-7",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-7",
  "type": "Example",
  "number": "1.1.1",
  "title": "A solution of an ODE.",
  "body": " A solution of an ODE    is a solution of the ODE , because ,   .   "
},
{
  "id": "sec-basic-concepts-8",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-8",
  "type": "Example",
  "number": "1.1.2",
  "title": "A non-solution of an ODE.",
  "body": " A non-solution of an ODE    is not a solution of the ODE , because ,   .   "
},
{
  "id": "sec-basic-concepts-11",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "sec-basic-concepts-12",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-12",
  "type": "Example",
  "number": "1.1.3",
  "title": "Examples of ODEs in typical and general forms.",
  "body": " Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).     "
},
{
  "id": "sec-basic-concepts-14",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-14",
  "type": "Example",
  "number": "1.1.4",
  "title": "Example of a PDE.",
  "body": " Example of a PDE   A harmonic function in two variables are defined by the PDE We shall not require PDEs in this course.   "
},
{
  "id": "sec-why-study-DEs",
  "level": "1",
  "url": "sec-why-study-DEs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Why study differential equations?",
  "body": " Why study differential equations?  The answer is simple: Differential equation is the foundation of science and technology.   Newton's law of cooling  Consider an object of temperature placed in a room of ambient temperature .  Newton's law of cooling: The rate of change of is proportional to the difference of the temperatures between the object and the ambient room.  Mathematically, this means where is some constant, is the ambient temperature.  If the ambient temperature is constant, then we may solve it by separating the variables:   .   Note: The constant is arbitrary. Without any further information there is no way to decide . In other words, is a solution of the ODE for ANY . Such an expression is called a one-parameter family of solutions . Generally, when solving a first-order ODE , we seek a one-parameter family of solutions. If all solutions of the ODE are contained in the family, then we call it the general solution .    Water pollution model  A lake has water volume m 3 . Assume is constant. A factory emits kilograms of mercury into the lake every day. Suppose the mercury diffuses to the lake instantly and water refreshes every day by m 3 . How much time does it take for the water to be unpotable?  Let be the mass of mercury in the lake at time . Let be a small period of time. Within the time period :   Mercury in = .  Polluted water out = .  Density of mercury = .  Mercury out = .   Thus   Let , we obtain a differential equation for ,   Although not explicitly stated in the problem, we actually have  An initial condition .  We may also search on internet for the EPA standard, which states that water is not potable if density of mercury reaches the level .    Therefore, we are looking for a time when   This differential equation can be solved by separating variables:   This is a one-parameter family of solutions of the ODE. We may determine the constant with the initial condition:   So we obtained a definite function as the solution.  In case , , , we see that   when .    Initial value problem  We have solved the initial value problem   Generally, an initial value problem (which shall be abbreviated as IVP ) consists of a (set of) differential equation(s) and a (set of) initial values.  A first order IVP is of the form   In most science and engineering applications, an IVP should have a unique solution on an interval, called interval of existence .  Summary:  A first-order ODE One-parameter family of solutions.  A first-order IVP A particular solution + interval of existence.   "
},
{
  "id": "Initial-value-problem-4",
  "level": "2",
  "url": "sec-why-study-DEs.html#Initial-value-problem-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem IVP "
},
{
  "id": "Initial-value-problem-5",
  "level": "2",
  "url": "sec-why-study-DEs.html#Initial-value-problem-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first order IVP "
},
{
  "id": "Initial-value-problem-7",
  "level": "2",
  "url": "sec-why-study-DEs.html#Initial-value-problem-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval of existence "
},
{
  "id": "geometric-interpretation",
  "level": "1",
  "url": "geometric-interpretation.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometric interpretation",
  "body": " Geometric interpretation  Not all ODE can be solved as in the previous sections.   In general, we cannot expect to obtain explicit solutions. But there does exist a way to get some information of the solution that works for every ODE .  Consider the IVP . If we substitute in the ODE, we obtain   In other words, the derivative of the solution of the IVP at is known , and takes the value .  Example: . .  Consider the IVP .  Collecting all the derivatives for every point in the -plane, using line elements to denote the derivative, we obtain a picture called the direction field .   Direction field of   Note that the right-hand-side is independent of . So we only calculate with varying -values. Here is the table of values with ranging from to with step .    |                                Based on the previous table, we may sketch the direction field as follows.    Direction field for     We may use the direction field to conduct qualitative studies . Recall from Calculus I:   If , then increases;  If , then stays;  If , then decreases.   Therefore, the direction field can be used to determine the qualitative behavior of solutions of the ODE.   Qualitative behavior of solutions of .    If is above , then the solution increases, going further away from .  If is below , then the solution decreases, going further away from .  If is on , then the solution stays on .      Nonlinear ODE                                   Direction field for     Knowing the direction field, we may plot the graph of a few actual solutions on the -plane. The graph is usually called an integral curve . We may analyze the asymptotic behavior of the solutions, i.e., the behavior of when . In most engineering practices, we only care about the long-term behavior , which means the behavior of when .   Integral curve of and asymptotic behavior of solutions   We first sketch the integral curves, knowing that they must follow the flow given by the direction field.    Direction field for   From the direction field, the following asymptotic behaviors can be observed:   If , then  If , then  If , then  If , then  If , then     What happens if the ODE involves ? It is still possible to draw the direction field by hand and use the qualitative method to analyze the asymptotic behavior of the solutions. We will not require the technique in this course. Please watch MIT Lecture 1 if you are interested.  "
},
{
  "id": "geometric-interpretation-10",
  "level": "2",
  "url": "geometric-interpretation.html#geometric-interpretation-10",
  "type": "Example",
  "number": "1.3.1",
  "title": "Direction field of <span class=\"process-math\">\\(y' = 2y - 1\\)<\/span>.",
  "body": " Direction field of   Note that the right-hand-side is independent of . So we only calculate with varying -values. Here is the table of values with ranging from to with step .    |                                Based on the previous table, we may sketch the direction field as follows.    Direction field for    "
},
{
  "id": "geometric-interpretation-14",
  "level": "2",
  "url": "geometric-interpretation.html#geometric-interpretation-14",
  "type": "Example",
  "number": "1.3.3",
  "title": "Qualitative behavior of solutions of <span class=\"process-math\">\\(y' = 2y - 1\\text{.}\\)<\/span>.",
  "body": " Qualitative behavior of solutions of .    If is above , then the solution increases, going further away from .  If is below , then the solution decreases, going further away from .  If is on , then the solution stays on .    "
},
{
  "id": "geometric-interpretation-15",
  "level": "2",
  "url": "geometric-interpretation.html#geometric-interpretation-15",
  "type": "Example",
  "number": "1.3.4",
  "title": "Nonlinear ODE <span class=\"process-math\">\\(y' = (y+1)(y-2)\\)<\/span>.",
  "body": " Nonlinear ODE                                   Direction field for    "
},
{
  "id": "geometric-interpretation-16",
  "level": "2",
  "url": "geometric-interpretation.html#geometric-interpretation-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral curve asymptotic behavior long-term behavior "
},
{
  "id": "geometric-interpretation-17",
  "level": "2",
  "url": "geometric-interpretation.html#geometric-interpretation-17",
  "type": "Example",
  "number": "1.3.6",
  "title": "Integral curve of <span class=\"process-math\">\\(y' = (y+1)(y-2)\\)<\/span> and asymptotic behavior of solutions.",
  "body": " Integral curve of and asymptotic behavior of solutions   We first sketch the integral curves, knowing that they must follow the flow given by the direction field.    Direction field for   From the direction field, the following asymptotic behaviors can be observed:   If , then  If , then  If , then  If , then  If , then    "
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
