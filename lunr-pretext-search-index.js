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
  "id": "sec-classification",
  "level": "1",
  "url": "sec-classification.html",
  "type": "Section",
  "number": "1.4",
  "title": "Classification of Differential Equations",
  "body": " Classification of Differential Equations  We saw in that differential equations can be classified by   Types: ODE and PDE.  Order: the order of highest derivative.   We now focus on the another important classification: linearity.  In this course, we mainly focus on linear ODEs , i.e.,   where is linear in . Equivalently, all depend only on and do not depend on . Otherwise, we say the ODE is nonlinear .  For people who have not seen partial derivatives before, we review the definition here. Given an -variable function , the partial derivative is obtained by taking the derivative with respect to while treating all other ’s as constants.   Partial derivatives of  There are two variables . The partial derivatives are     Partial derivatives of  There are two variables . The partial derivatives are     Determine if the ODE is linear.   Written in the general form:  So  We check that all independent of . So is a linear ODE.     Determine if the ODE is linear.   Written in the general form:  So  We check that that depends on  So is a nonlinear ODE.     Determine if the ODE is linear.   Written in the general form:  So  We check that , ,  all independent of  So is a linear ODE.    Generally, every th order linear ODE can be written as   This is the standard form of a linear ODE (where the coefficient of the highest derivative is 1).  We know a lot about linear ODEs, but very little about nonlinear ODEs.  "
},
{
  "id": "sec-classification-5",
  "level": "2",
  "url": "sec-classification.html#sec-classification-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear ODEs "
},
{
  "id": "sec-classification-7",
  "level": "2",
  "url": "sec-classification.html#sec-classification-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "sec-classification-9",
  "level": "2",
  "url": "sec-classification.html#sec-classification-9",
  "type": "Example",
  "number": "1.4.1",
  "title": "Partial derivatives of<span class=\"process-math\">\\(F(x,y) = x^2 + y^2\\)<\/span>.",
  "body": " Partial derivatives of  There are two variables . The partial derivatives are   "
},
{
  "id": "sec-classification-10",
  "level": "2",
  "url": "sec-classification.html#sec-classification-10",
  "type": "Example",
  "number": "1.4.2",
  "title": "Partial derivatives of <span class=\"process-math\">\\(F(x,y) = \\sqrt{x^2 + y^2}\\)<\/span>.",
  "body": " Partial derivatives of  There are two variables . The partial derivatives are   "
},
{
  "id": "sec-classification-11",
  "level": "2",
  "url": "sec-classification.html#sec-classification-11",
  "type": "Example",
  "number": "1.4.3",
  "title": "Determine if the ODE <span class=\"process-math\">\\(y'' - 2y' + y = \\sqrt{t}\\)<\/span> is linear..",
  "body": " Determine if the ODE is linear.   Written in the general form:  So  We check that all independent of . So is a linear ODE.   "
},
{
  "id": "sec-classification-12",
  "level": "2",
  "url": "sec-classification.html#sec-classification-12",
  "type": "Example",
  "number": "1.4.4",
  "title": "Determine if the ODE <span class=\"process-math\">\\(y' = \\sin y\\)<\/span> is linear..",
  "body": " Determine if the ODE is linear.   Written in the general form:  So  We check that that depends on  So is a nonlinear ODE.   "
},
{
  "id": "sec-classification-13",
  "level": "2",
  "url": "sec-classification.html#sec-classification-13",
  "type": "Example",
  "number": "1.4.5",
  "title": "Determine if the ODE <span class=\"process-math\">\\(y'' - \\sqrt{t}y' + \\sin(t^2) y = t^3\\)<\/span> is linear..",
  "body": " Determine if the ODE is linear.   Written in the general form:  So  We check that , ,  all independent of  So is a linear ODE.   "
},
{
  "id": "sec-classification-16",
  "level": "2",
  "url": "sec-classification.html#sec-classification-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form "
},
{
  "id": "sec-1st-order-linear",
  "level": "1",
  "url": "sec-1st-order-linear.html",
  "type": "Section",
  "number": "1.5",
  "title": "First-order Linear ODEs",
  "body": " First-order Linear ODEs  Standard form:   Integrating factor:   General solution:   How comes the formula? Observe that  In general, any function making is called an integrating factor. To satisfy this equation, we calculate that   So means   Now that we found the , Recall that the ODE we intend to solve is   Thus, we conclude that   Integrate both sides:   Remarks:   This formula ONLY works for the standard form . Before using it, get the standard form first.  When integrating , no need to worry about the constant or the absolute value. They make no difference.  The arbitrary constant in the general solution appears as a part of the numerator, not outside of the fraction. It is very rare that is a pure constant.    Solve    Already in standard form.  Integrating factor:  General solution:    Digression: What if we keep the constant in the integrating factor?   Integrating factor:  General solution:  So the extra constant in the integrating factor does not make any difference!    Coming back to the problem, we have obtained the general solution. But we are not done yet. We are given an IVP, so we need to take care of the initial condition.   Determine by the initial condition:   Solution of the IVP:         Solve    Standard form:  Integrating factor:  Warning! Saying commits the crime of abusing algebra, which is punishable by banishment to the STEM.  General solution:  Determine by initial value:  Solution of the IVP:      Solve    Standard form:  Integrating factor:   Note that  General solution:  We calculate the integral in the numerator:  Thus the general solution is of the form where in the last step we used the identity .       Solve    Standard form:  Integrating factor:  General solution:  We calculate the integral in the numerator:   So we conclude the general solution as        Solve    Already in standard form.  Integrating factor:  General solution:   How to calculate the integral?  So we have   Then we conclude the general solution as        Solve    Already in standard form.  Integrating factor:  Here we ignored the absolute value (why can we do that?).  General solution:  Please make sure you know how to integrate .       Solve . Find the solution of the IVP that is continuous everywhere   General principle: Solve the ODE on each individual interval. Determine the constants by either the initial condition or continuity at the boundary .  On the interval   Integrating factor:  General solution:   Initial condition  We conclude that on   On the interval   Integrating factor:  General solution:  On   So the solution of the IVP is  To make sure is continuous, we need . This is to say  Conclusion: the continuous solution of the IVP is    "
},
{
  "id": "sec-1st-order-linear-18",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-18",
  "type": "Example",
  "number": "1.5.1",
  "title": "Solve <span class=\"process-math\">\\(y' + 2y = e^{3t}, \\quad y(0) = 3.\\)<\/span>.",
  "body": " Solve    Already in standard form.  Integrating factor:  General solution:    Digression: What if we keep the constant in the integrating factor?   Integrating factor:  General solution:  So the extra constant in the integrating factor does not make any difference!    Coming back to the problem, we have obtained the general solution. But we are not done yet. We are given an IVP, so we need to take care of the initial condition.   Determine by the initial condition:   Solution of the IVP:       "
},
{
  "id": "sec-1st-order-linear-19",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-19",
  "type": "Example",
  "number": "1.5.2",
  "title": "Solve <span class=\"process-math\">\\(ty' - y = t^3, \\quad y(1) = 0.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:  Warning! Saying commits the crime of abusing algebra, which is punishable by banishment to the STEM.  General solution:  Determine by initial value:  Solution of the IVP:    "
},
{
  "id": "sec-1st-order-linear-20",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-20",
  "type": "Example",
  "number": "1.5.3",
  "title": "Solve <span class=\"process-math\">\\((\\sin t) y' + (\\cos t) y = \\sin^2 t, \\quad 0 \\lt t \\lt \\pi.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:   Note that  General solution:  We calculate the integral in the numerator:  Thus the general solution is of the form where in the last step we used the identity .     "
},
{
  "id": "sec-1st-order-linear-21",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-21",
  "type": "Example",
  "number": "1.5.4",
  "title": "Solve <span class=\"process-math\">\\(ty' + 2y = t(\\ln 3t)^2.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:  General solution:  We calculate the integral in the numerator:   So we conclude the general solution as      "
},
{
  "id": "sec-1st-order-linear-22",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-22",
  "type": "Example",
  "number": "1.5.5",
  "title": "Solve <span class=\"process-math\">\\(y' + y = \\cos 2t.\\)<\/span>.",
  "body": " Solve    Already in standard form.  Integrating factor:  General solution:   How to calculate the integral?  So we have   Then we conclude the general solution as      "
},
{
  "id": "sec-1st-order-linear-23",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-23",
  "type": "Example",
  "number": "1.5.6",
  "title": "Solve <span class=\"process-math\">\\(y' - (\\tan t)y = \\sec^2 t.\\)<\/span>.",
  "body": " Solve    Already in standard form.  Integrating factor:  Here we ignored the absolute value (why can we do that?).  General solution:  Please make sure you know how to integrate .     "
},
{
  "id": "ex-1st-order-linear-piecewise",
  "level": "2",
  "url": "sec-1st-order-linear.html#ex-1st-order-linear-piecewise",
  "type": "Example",
  "number": "1.5.7",
  "title": "Solve<div class=\"displaymath process-math\">\n\\begin{equation*}\ny' + y = g(t), \\, y(0) = 0, \\, g(t) = \\begin{cases} 1 \\amp 0 \\leq t \\leq 1 \\\\ 0 \\amp t \\gt 1 \\end{cases}\\text{.}\n\\end{equation*}\n<\/div>Find the solution of the IVP that is continuous everywhere.",
  "body": " Solve . Find the solution of the IVP that is continuous everywhere   General principle: Solve the ODE on each individual interval. Determine the constants by either the initial condition or continuity at the boundary .  On the interval   Integrating factor:  General solution:   Initial condition  We conclude that on   On the interval   Integrating factor:  General solution:  On   So the solution of the IVP is  To make sure is continuous, we need . This is to say  Conclusion: the continuous solution of the IVP is   "
},
{
  "id": "sec-separable-equations",
  "level": "1",
  "url": "sec-separable-equations.html",
  "type": "Section",
  "number": "1.6",
  "title": "Separable Equations",
  "body": " Separable Equations  In general, a nonlinear ODE is very difficult to solve. We can only handle a few special types of nonlinear ODEs. In this section, we study the separable ODEs , namely, an ODE of the form: i.e., the derivative is a product of two functions, one depends only on , the other depends only on . To solve this ODE, we first separate the variables, then integrate both sides, The process yields a one-parameter family of implicit solutions.   Solve the separable ODE    Separate the variables:   Integrate both sides:  We thus obtain a one-parameter family of implicit solutions      Solve the IVP    Separate the variables:   Integrate both sides:   We thus obtain a one-parameter family of implicit solutions   The initial condition should give us a particular solution   We thus obtain a particular implicit solution   This solution can actually be made explicit by solving for in terms of . Multiply both sides by 2 and take the square root,   Since , we should take the positive branch. So is the explicit solution of the IVP.   The solution makes sense when Solving this inequality is not possible without a computer. So we will leave it as is.   Conclusion: The solution is It is defined when     Implicit solution vs explicit solution   If you are given an ODE without initial values, then a one-parameter family of implicit solutions is sufficient.  If you are given an IVP, whenever possible, you should try to get the explicit solution and the interval of definition (the interval where the solution is defined).   Remark.    Suppose we have an initial condition specified for the ODE in , which determines a definite . But it is impossible to solve for in terms of to get the explicit solution. In that case, we have to be satisfied with the implicit solution and ask a computer to handle the function values.  In , we managed to solve for in terms of , but was not able to solve for the interval of definition by hand. Nevertheless, we can still ask a computer to solve for the interval of definition. For , the computer gives us the interval of definition as .  The interval of definition, as its name hints, should consist of only one interval that contains the initial -value. It should also be an open interval . We do not include the endpoints because the derivative is not defined there. In , the computer would say that the solution makes sense on . But we should exclude the endpoint and use instead.    Solve the ODE    Separate the variables:   Integrate both sides:    We thus obtain a one-parameter family of implicit solutions     Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the positive branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .     Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the negative branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .    Remark. The explicit solution contains more information than the implicit solution. Indeed, Observe that  The positive or negative branch cannot be seen in the implicit solution.  The interval of definition cannot be determined by the implicit solution.  This is why whenever it is possible, we should try to solve for the explicit solution and the interval of definition.  Remark. From and , we also see that the positive or negative branch and the interval of definition depends on the initial condition. Thus these notions make no sense for a one-parameter family of solutions. This is why without the initial condition, we can leave the solution in the implicit form.  "
},
{
  "id": "sec-separable-equations-2",
  "level": "2",
  "url": "sec-separable-equations.html#sec-separable-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable ODEs "
},
{
  "id": "ex-separable-1",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-1",
  "type": "Example",
  "number": "1.6.1",
  "title": "Solve the separable ODE <span class=\"process-math\">\\(\\frac{dy}{dx} = \\frac{e^x - x}{e^{-y} + y}\\)<\/span>.",
  "body": " Solve the separable ODE    Separate the variables:   Integrate both sides:  We thus obtain a one-parameter family of implicit solutions    "
},
{
  "id": "ex-separable-2",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-2",
  "type": "Example",
  "number": "1.6.2",
  "title": "Solve the IVP <span class=\"process-math\">\\(\\frac{dy}{dx} = \\frac{x^2 + \\sin x}{y}, \\quad y(0) = 1\\)<\/span>.",
  "body": " Solve the IVP    Separate the variables:   Integrate both sides:   We thus obtain a one-parameter family of implicit solutions   The initial condition should give us a particular solution   We thus obtain a particular implicit solution   This solution can actually be made explicit by solving for in terms of . Multiply both sides by 2 and take the square root,   Since , we should take the positive branch. So is the explicit solution of the IVP.   The solution makes sense when Solving this inequality is not possible without a computer. So we will leave it as is.   Conclusion: The solution is It is defined when    "
},
{
  "id": "ex-separable-3",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-3",
  "type": "Example",
  "number": "1.6.3",
  "title": "Solve the ODE <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}\\)<\/span>.",
  "body": " Solve the ODE    Separate the variables:   Integrate both sides:    We thus obtain a one-parameter family of implicit solutions   "
},
{
  "id": "ex-separable-4",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-4",
  "type": "Example",
  "number": "1.6.4",
  "title": "Solve the IVP <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}, \\, y(\\sqrt{3}) = \\frac{1}{2}\\)<\/span>.",
  "body": " Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the positive branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .   "
},
{
  "id": "ex-separable-5",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-5",
  "type": "Example",
  "number": "1.6.5",
  "title": "Solve the IVP <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}, \\, y(\\sqrt{3}) = -\\frac{1}{4}\\)<\/span>.",
  "body": " Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the negative branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .   "
},
{
  "id": "sec-existence-uniqueness",
  "level": "1",
  "url": "sec-existence-uniqueness.html",
  "type": "Section",
  "number": "1.7",
  "title": "Existence and Uniqueness of Solutions",
  "body": " Existence and Uniqueness of Solutions  For the application of ODEs in science and engineering, when we modeled a problem into an initial value problem, normally we expect the solution to exist and be unique. However, this is not always the case.   Pathological IVP We first study the initial value problem (IVP)  This IVP has two solutions :   If a system is modeled by this IVP, then we cannot possibly predict how the system behaves. Such problem can also happen for linear ODeS.       Standard form:   Integrating factor:   General solution:    Plug in the initial value: This means for every real number , is a solution of the IVP. The IVP has infinitely many solutions.          We have obtained the general solution in :  Plug in the initial value: , impossible. In other words, The IVP has no solutions.      Summary: A pathological IVP may have no solution \/ more than one solution \/ infinitely many solutions . To determine if an IVP is reasonably posed, we need the existence and uniqueness theorem.    Existence and Uniqueness Theorem: Linear version.   Existence and Uniqueness Theorem: Linear version.   Consider the IVP     where the ODE is linear and in its standard form . Assume that:   Both and are continuous on an open interval  The open interval contains the initial time   Then there exists a unique function  over the interval that solves the IVP.     Interval of Existence and Uniqueness   The interval of existence and uniqueness is an where the solution of the IVP exists uniquely. For brevity, we call it the interval of existence .    allows us to determine the interval of existence without solving it. To obtain the interval, we follow the following procedure.   Find out the standard form of the ODE and specify the initial condition  Find out the singular points, which are the points where and are not continuous. These singular points separate the real line into disjoint open intervals  If is a singular point, we have a pathological IVP. If is not a singular point, then the interval of existence is just the interval that contains that are bounded by the singular points.        Standard form:  Both and blow up at So is a singular point.  Interval of existence is     Remark. The solution of the IVP is that is defined on So if we talk about the interval of definition of the solution, it is But this doesn't change the fact that is a singular point. Generally, we should not be concerned about the solution outside the interval of existence, which is still       Standard form:  is not continuous when and  is not continuous when   Interval of existence =         The standard form is  is not continuous when or  Recall:  So is not continuous when or Note that and  is not continuous when , or where  So the singular points are and   Interval of existence =    Remark: Recall in , we studied the IVP Since is not continuous at , the IVP only has a unique solution on Indeed, for every number  is a solution (the IVP has infinitely many solutions). Only with the continuity requirement did us obtain a unique solution.    Existence and Uniqueness Theorem: Nonlinear case   Existence and Uniqueness Theorem: Nonlinear case   Consider the IVP   Assume that:   The function is continuous NEAR  i.e., one can find small such that is continuous in the rectangular region   The function is continuous NEAR    Then a unique solution  exists NEAR  i.e., there exists a small such that a solution exists on  Likewise, any IVP that does not satisfy the conditions of the theorem is pathological .    Remarks:   The theorem is not as strong as the linear version. It only concludes local existence. It does not tell us the interval of existence.  Nevertheless, the theorem tells if an IVP is reasonably formulated.   Example 1:   is continuous everywhere.  is continuous when   (away from  So the IVP has a unique solution near  Example 2:   is continuous everywhere.  is continuous when   (on  The IVP does not have a unique solution.  Exercise: Check that and are all solutions of the IVP.  Example 3. Find out all , such that the IVP  is reasonably formulated.  is continuous when  is continuous when  So should satisfy  Remark: You should always take the “interior” of the region where the functions and are continuous. You should not keep the boundary (won’t require in this course).   "
},
{
  "id": "ex-existence-uniqueness-1",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-1",
  "type": "Example",
  "number": "1.7.1",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(0) = 1\\)<\/span>.",
  "body": "     Standard form:   Integrating factor:   General solution:    Plug in the initial value: This means for every real number , is a solution of the IVP. The IVP has infinitely many solutions.    "
},
{
  "id": "ex-existence-uniqueness-2",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-2",
  "type": "Example",
  "number": "1.7.2",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(0) = 0\\)<\/span>.",
  "body": "     We have obtained the general solution in :  Plug in the initial value: , impossible. In other words, The IVP has no solutions.     "
},
{
  "id": "thm-existence-uniqueness-linear",
  "level": "2",
  "url": "sec-existence-uniqueness.html#thm-existence-uniqueness-linear",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Existence and Uniqueness Theorem: Linear version..",
  "body": " Existence and Uniqueness Theorem: Linear version.   Consider the IVP     where the ODE is linear and in its standard form . Assume that:   Both and are continuous on an open interval  The open interval contains the initial time   Then there exists a unique function  over the interval that solves the IVP.   "
},
{
  "id": "def-existence-uniqueness-interval",
  "level": "2",
  "url": "sec-existence-uniqueness.html#def-existence-uniqueness-interval",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Interval of Existence and Uniqueness.",
  "body": " Interval of Existence and Uniqueness   The interval of existence and uniqueness is an where the solution of the IVP exists uniquely. For brevity, we call it the interval of existence .   "
},
{
  "id": "ex-existence-uniqueness-3",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-3",
  "type": "Example",
  "number": "1.7.5",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(\\ln 2) = \\frac{1}{2}\\)<\/span>.",
  "body": "     Standard form:  Both and blow up at So is a singular point.  Interval of existence is    "
},
{
  "id": "ex-existence-uniqueness-4",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-4",
  "type": "Example",
  "number": "1.7.6",
  "title": "<span class=\"process-math\">\\((t - 3)y' + (\\ln t)y = 2t, \\, y(1) = 2.\\)<\/span>.",
  "body": "     Standard form:  is not continuous when and  is not continuous when   Interval of existence =   "
},
{
  "id": "ex-existence-uniqueness-5",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-5",
  "type": "Example",
  "number": "1.7.7",
  "title": "<span class=\"process-math\">\\(\\sin(2t) y' + \\tan(4t) y = \\frac{1}{t}, \\, y\\left(\\frac{\\pi}{4}\\right) = 0.\\)<\/span>.",
  "body": "     The standard form is  is not continuous when or  Recall:  So is not continuous when or Note that and  is not continuous when , or where  So the singular points are and   Interval of existence =   "
},
{
  "id": "thm-existence-uniqueness-nonlinear",
  "level": "2",
  "url": "sec-existence-uniqueness.html#thm-existence-uniqueness-nonlinear",
  "type": "Theorem",
  "number": "1.7.8",
  "title": "Existence and Uniqueness Theorem: Nonlinear case.",
  "body": " Existence and Uniqueness Theorem: Nonlinear case   Consider the IVP   Assume that:   The function is continuous NEAR  i.e., one can find small such that is continuous in the rectangular region   The function is continuous NEAR    Then a unique solution  exists NEAR  i.e., there exists a small such that a solution exists on  Likewise, any IVP that does not satisfy the conditions of the theorem is pathological .   "
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
