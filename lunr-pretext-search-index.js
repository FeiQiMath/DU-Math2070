var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This textbook is the culmination of several years of teaching differential equations at Rutgers University and the University of Denver. It originated from a desire to provide a more accessible, coherent, and pedagogically sound alternative to the commercial textbooks that I found lacking in various respects. Over time, these notes have been refined and expanded through continuous use in the classroom, shaped by student feedback, and improved by collaborative teaching experiences.  The current version covers the standard topics taught in a first course on differential equations at the University of Denver. While it is intended to serve as a complete resource for that curriculum, there remain several important topics that will be included in future iterations, such as series solutions to differential equations, the method of variation of parameters, and the phase portraits of linear and nonlinear autonomous systems.  This work was made possible in part through the support of a Colorado Department of Higher Education Open Educational Resources (CDHE OER) grant. I would also like to express my sincere gratitude to the many colleagues and teaching assistants who have contributed to this effort over the years. In particular, I am grateful for the valuable influence and mentorship of Doron Zeilberger, Lasantha Goonetilleke, and Kumar Shwetketu Virbhadra, who were instructors I have had the privilege to work as a TA at Rutgers University. I am indebted to my teaching assistants: Kempton Albee, Benjamin Brown, Brendan Dufty, Zion Hefty, Paul Johnson, Eden Ketchum, Christian Naess, and Kaya Wright, for their support, insights, and collaboration. I should also acknowledge the Cursor app that provided a quick conversion of my previous materials in all different formats (scanned, handwritten, latex, powerpoint, etc.) into the simple PreTeXt format and assisted me in the subsequent editing process.  It is my hope that this textbook will serve as a useful and adaptable resource for students and instructors alike, and that it contributes to a broader effort to make high-quality educational materials freely available.    Fei Qi  "
},
{
  "id": "sec-basic-concepts",
  "level": "1",
  "url": "sec-basic-concepts.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Concepts",
  "body": " Basic Concepts    A differential equation is an equation concerning derivatives. An ordinary differential equation (abbrev. ODE ) is an equation involving only ordinary derivatives of a single-variable function.    Here is the typical form of a first-order ODE: or, with the abbreviation of and by and , respectively, where    is the independent variable.    is a one-variable function depending on .    is the derivative of .    is a known function of two variables.    This ODE expresses the derivative in terms of and .    A function defined on an open interval is called a solution of the ODE on if    is differentiable on .    For all in , the equation holds.      While we haven't learned how to solve an ODE, it is easy to check if a function is a solution of an ODE. Simply compute its derivatives, then plug in the ODE, and see if equality holds.   A solution of an ODE   is a solution of the ODE , because ,   .  The solution is defined on everywhere on .    A non-solution of an ODE   is not a solution of the ODE , because ,   .  The solution is defined on everywhere on .    We shall apply the method of checking solutions extensively in this course, especially in the study of higher-order linear ODEs.     Most generally, a first-order ODE is of the form i.e., a relation among the variable and . We call this the general form of a first-order ODE.  The order of a differential equation is the order of the highest derivative appearing in the equation. Similarly, the general form of an -th order ODE is i.e., a relation among the variable and the derivatives of .     Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).        A partial differential equation (abbrev. PDE ) is an equation concerning partial derivatives.     Example of a PDE   A harmonic function in two variables are defined by the PDE     We shall not require PDEs in this course.  "
},
{
  "id": "def-diffeq",
  "level": "2",
  "url": "sec-basic-concepts.html#def-diffeq",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A differential equation is an equation concerning derivatives. An ordinary differential equation (abbrev. ODE ) is an equation involving only ordinary derivatives of a single-variable function.   "
},
{
  "id": "sec-basic-concepts-3",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "typical form "
},
{
  "id": "def-solution",
  "level": "2",
  "url": "sec-basic-concepts.html#def-solution",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  A function defined on an open interval is called a solution of the ODE on if    is differentiable on .    For all in , the equation holds.     "
},
{
  "id": "ex-solution",
  "level": "2",
  "url": "sec-basic-concepts.html#ex-solution",
  "type": "Example",
  "number": "1.1.3",
  "title": "A solution of an ODE.",
  "body": " A solution of an ODE   is a solution of the ODE , because ,   .  The solution is defined on everywhere on .  "
},
{
  "id": "ex-non-solution",
  "level": "2",
  "url": "sec-basic-concepts.html#ex-non-solution",
  "type": "Example",
  "number": "1.1.4",
  "title": "A non-solution of an ODE.",
  "body": " A non-solution of an ODE   is not a solution of the ODE , because ,   .  The solution is defined on everywhere on .  "
},
{
  "id": "sec-basic-concepts-10",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-10",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": " We shall apply the method of checking solutions extensively in this course, especially in the study of higher-order linear ODEs.  "
},
{
  "id": "def-general-form",
  "level": "2",
  "url": "sec-basic-concepts.html#def-general-form",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  Most generally, a first-order ODE is of the form i.e., a relation among the variable and . We call this the general form of a first-order ODE.  The order of a differential equation is the order of the highest derivative appearing in the equation. Similarly, the general form of an -th order ODE is i.e., a relation among the variable and the derivatives of .   "
},
{
  "id": "sec-basic-concepts-12",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-12",
  "type": "Example",
  "number": "1.1.7",
  "title": "Examples of ODEs in typical and general forms.",
  "body": " Examples of ODEs in typical and general forms     (First-order ODE in its typical form).  (First-order ODE).  (Third-order ODE).     "
},
{
  "id": "def-pde",
  "level": "2",
  "url": "sec-basic-concepts.html#def-pde",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  A partial differential equation (abbrev. PDE ) is an equation concerning partial derivatives.   "
},
{
  "id": "sec-basic-concepts-14",
  "level": "2",
  "url": "sec-basic-concepts.html#sec-basic-concepts-14",
  "type": "Example",
  "number": "1.1.9",
  "title": "Example of a PDE.",
  "body": " Example of a PDE   A harmonic function in two variables are defined by the PDE    "
},
{
  "id": "sec-why-study-DEs",
  "level": "1",
  "url": "sec-why-study-DEs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Why study differential equations?",
  "body": " Why study differential equations?  The answer is simple: Differential equation is the foundation of science and technology. In this section, we shall discuss two examples.   Newton's law of cooling  Consider an object of temperature placed in a room of ambient temperature . Newton's law of cooling states that the rate of change of is proportional to the difference of the temperatures between the object and the ambient room. Mathematically, this means where is some constant, is the ambient temperature.  If the ambient temperature is constant, then we may solve the ODE by separating the variables : We exponentiate both sides to obtain Then moving to the right-hand side, we obtain     The constant is arbitrary. Without any further information there is no way to decide .  In other words, is a solution of the ODE for ANY . Such an expression is called a one-parameter family of solutions . Generally, when solving a first-order ODE , we seek a one-parameter family of solutions. If all solutions of the ODE are contained in the family, then we call it the general solution .      When we exponentiated to obtain , we ignored the absolute value after exponentiation. Let's go through the details carefully. Rigorously, when we exponentiate both sides of the equation, we get Notice that is always a positive constant. Getting rid of the absolute value, we obtain What we did to obtain is to incorporate the constant into the constant . So the constant can be either positive or negative.  A more acute reader might ask can be zero? The answer is yes. If , then , which is a constant function. It is easily verified that is also a solution of the ODE.      Water pollution model  A lake has water volume  . Assume is constant. A factory emits kilograms of mercury into the lake every day. Suppose the mercury diffuses to the lake instantly and water refreshes every day by . How much time does it take for the water to be unpotable?  Let be the mass of mercury in the lake at time . Let be a small period of time. Within the time period :   Mercury in = .  Polluted water out = .  Density of mercury = .  Mercury out = .   Thus   Let , we obtain a differential equation for ,   Although not explicitly stated in the problem, we actually have  An initial condition .  We may also search on internet for the EPA standard, which states that water is not potable if density of mercury reaches the level .    Therefore, we are looking for a time when   This differential equation can be solved by separating variables:   This is a one-parameter family of solutions of the ODE. We may determine the constant with the initial condition:   Therefore, We obtained a definite function together with an interval.  In case , , , we may solve that   when .   We have solved the initial value problem which is an ODE together with an initial condition. The solution is a function defined on an interval satisfying both the ODE and the initial condition.   We end this section with the following definition.    A first-order ODE normally have infinitely many solutions. Many of them can be represented as one-parameter family of solutions . If the one-parameter family contains all solutions, we call it the general solution .  A first order initial value problem is of the form In most science and engineering applications, an IVP should have a unique solution on an interval, called interval of existence and uniqueness , usually abbreviated as interval of existence .  Generally, an -th order ODE also have infinitely many solutions. Many of them can be represented as an -parameter family of solutions . If the -parameter family contains all solutions, we call it the general solution .  Generally, an initial value problem (which shall be abbreviated as IVP ) consists of a (set of) differential equation(s) and a (set of) initial values. In case the IVP contains one ODE of order , we need initial values to obtain a unique solution.     "
},
{
  "id": "Newtons-law-of-cooling-4",
  "level": "2",
  "url": "sec-why-study-DEs.html#Newtons-law-of-cooling-4",
  "type": "Remark",
  "number": "1.2.1",
  "title": "",
  "body": "  The constant is arbitrary. Without any further information there is no way to decide .  In other words, is a solution of the ODE for ANY . Such an expression is called a one-parameter family of solutions . Generally, when solving a first-order ODE , we seek a one-parameter family of solutions. If all solutions of the ODE are contained in the family, then we call it the general solution .   "
},
{
  "id": "Newtons-law-of-cooling-5",
  "level": "2",
  "url": "sec-why-study-DEs.html#Newtons-law-of-cooling-5",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": "  When we exponentiated to obtain , we ignored the absolute value after exponentiation. Let's go through the details carefully. Rigorously, when we exponentiate both sides of the equation, we get Notice that is always a positive constant. Getting rid of the absolute value, we obtain What we did to obtain is to incorporate the constant into the constant . So the constant can be either positive or negative.  A more acute reader might ask can be zero? The answer is yes. If , then , which is a constant function. It is easily verified that is also a solution of the ODE.   "
},
{
  "id": "subsec-water-pollution-model-19",
  "level": "2",
  "url": "sec-why-study-DEs.html#subsec-water-pollution-model-19",
  "type": "Remark",
  "number": "1.2.3",
  "title": "",
  "body": " We have solved the initial value problem which is an ODE together with an initial condition. The solution is a function defined on an interval satisfying both the ODE and the initial condition.  "
},
{
  "id": "subsec-water-pollution-model-21",
  "level": "2",
  "url": "sec-why-study-DEs.html#subsec-water-pollution-model-21",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  A first-order ODE normally have infinitely many solutions. Many of them can be represented as one-parameter family of solutions . If the one-parameter family contains all solutions, we call it the general solution .  A first order initial value problem is of the form In most science and engineering applications, an IVP should have a unique solution on an interval, called interval of existence and uniqueness , usually abbreviated as interval of existence .  Generally, an -th order ODE also have infinitely many solutions. Many of them can be represented as an -parameter family of solutions . If the -parameter family contains all solutions, we call it the general solution .  Generally, an initial value problem (which shall be abbreviated as IVP ) consists of a (set of) differential equation(s) and a (set of) initial values. In case the IVP contains one ODE of order , we need initial values to obtain a unique solution.   "
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
  "body": " First-order Linear ODEs   Consider a first-order linear ODE in its standard form   We solve it by first calculating the integrating factor   then the formula of the general solution is   How comes the formula? Observe that  In general, any function making is called an integrating factor. To satisfy this equation, we calculate that   So means   Now that we found the , Recall that the ODE we intend to solve is   Thus, we conclude that   Integrate both sides:     This formula ONLY works for the standard form . Before using it, get the standard form first.  When integrating , no need to worry about the constant or the absolute value. They make no difference.  The arbitrary constant in the general solution appears as a part of the numerator, not outside of the fraction. It might be helpful to write the formula of the general solution as From this formula, it is clear that is a pure constant only when is a constant. This case is very rare, and only happens when .     Solve   Already in standard form.  Integrating factor:  General solution:    Digression: What if we keep the constant in the integrating factor?   Integrating factor:  General solution: So the extra constant in the integrating factor does not make any difference!    Coming back to the problem, we have obtained the general solution. But we are not done yet. We are given an IVP, so we need to take care of the initial condition.   Determine by the initial condition:     Conclusion: The solution of the IVP is     Solve    Standard form:  Integrating factor:  Warning! Saying commits the crime of abusing algebra, which is punishable by banishment to the STEM.  General solution:  Determine by initial value:  Solution of the IVP:      Solve    Standard form:  Integrating factor:   Note that  General solution:  We calculate the integral in the numerator:  Thus the general solution is of the form where in the last step we used the identity .       Solve    Standard form:  Integrating factor:  General solution:  We calculate the integral in the numerator:   So we conclude the general solution as        Solve    Already in standard form.  Integrating factor:  General solution:   How to calculate the integral?  So we have   Then we conclude the general solution as        Solve    Already in standard form.  Integrating factor:  Here we ignored the absolute value (why can we do that?).  General solution:  Please make sure you know how to integrate .       Solve . Find the solution of the IVP that is continuous everywhere   General principle: Solve the ODE on each individual interval. Determine the constants by either the initial condition or continuity at the boundary .  On the interval   Integrating factor:  General solution:   Initial condition  We conclude that on   On the interval   Integrating factor:  General solution:  On   So the solution of the IVP is  To make sure is continuous, we need . This is to say  Conclusion: the continuous solution of the IVP is    "
},
{
  "id": "thm-1st-order-linear",
  "level": "2",
  "url": "sec-1st-order-linear.html#thm-1st-order-linear",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "",
  "body": " Consider a first-order linear ODE in its standard form   We solve it by first calculating the integrating factor   then the formula of the general solution is  "
},
{
  "id": "sec-1st-order-linear-14",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-14",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": "  This formula ONLY works for the standard form . Before using it, get the standard form first.  When integrating , no need to worry about the constant or the absolute value. They make no difference.  The arbitrary constant in the general solution appears as a part of the numerator, not outside of the fraction. It might be helpful to write the formula of the general solution as From this formula, it is clear that is a pure constant only when is a constant. This case is very rare, and only happens when .   "
},
{
  "id": "sec-1st-order-linear-15",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-15",
  "type": "Example",
  "number": "1.5.3",
  "title": "Solve <span class=\"process-math\">\\(y' + 2y = e^{3t}, \\quad y(0) = 3.\\)<\/span>.",
  "body": " Solve   Already in standard form.  Integrating factor:  General solution:    Digression: What if we keep the constant in the integrating factor?   Integrating factor:  General solution: So the extra constant in the integrating factor does not make any difference!    Coming back to the problem, we have obtained the general solution. But we are not done yet. We are given an IVP, so we need to take care of the initial condition.   Determine by the initial condition:     Conclusion: The solution of the IVP is   "
},
{
  "id": "sec-1st-order-linear-16",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-16",
  "type": "Example",
  "number": "1.5.4",
  "title": "Solve <span class=\"process-math\">\\(ty' - y = t^3, \\quad y(1) = 0.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:  Warning! Saying commits the crime of abusing algebra, which is punishable by banishment to the STEM.  General solution:  Determine by initial value:  Solution of the IVP:    "
},
{
  "id": "sec-1st-order-linear-17",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-17",
  "type": "Example",
  "number": "1.5.5",
  "title": "Solve <span class=\"process-math\">\\((\\sin t) y' + (\\cos t) y = \\sin^2 t, \\quad 0 \\lt t \\lt \\pi.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:   Note that  General solution:  We calculate the integral in the numerator:  Thus the general solution is of the form where in the last step we used the identity .     "
},
{
  "id": "sec-1st-order-linear-18",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-18",
  "type": "Example",
  "number": "1.5.6",
  "title": "Solve <span class=\"process-math\">\\(ty' + 2y = t(\\ln 3t)^2.\\)<\/span>.",
  "body": " Solve    Standard form:  Integrating factor:  General solution:  We calculate the integral in the numerator:   So we conclude the general solution as      "
},
{
  "id": "sec-1st-order-linear-19",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-19",
  "type": "Example",
  "number": "1.5.7",
  "title": "Solve <span class=\"process-math\">\\(y' + y = \\cos 2t.\\)<\/span>.",
  "body": " Solve    Already in standard form.  Integrating factor:  General solution:   How to calculate the integral?  So we have   Then we conclude the general solution as      "
},
{
  "id": "sec-1st-order-linear-20",
  "level": "2",
  "url": "sec-1st-order-linear.html#sec-1st-order-linear-20",
  "type": "Example",
  "number": "1.5.8",
  "title": "Solve <span class=\"process-math\">\\(y' - (\\tan t)y = \\sec^2 t.\\)<\/span>.",
  "body": " Solve    Already in standard form.  Integrating factor:  Here we ignored the absolute value (why can we do that?).  General solution:  Please make sure you know how to integrate .     "
},
{
  "id": "ex-1st-order-linear-piecewise",
  "level": "2",
  "url": "sec-1st-order-linear.html#ex-1st-order-linear-piecewise",
  "type": "Example",
  "number": "1.5.9",
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
  "body": " Separable Equations  In general, a nonlinear ODE is very difficult to solve. We can only handle a few special types of nonlinear ODEs.   Form of a separable ODE  In this section, we study the separable ODEs , namely, an ODE of the form: i.e., the derivative is a product of two functions, one depends only on , the other depends only on . To solve this ODE, we first separate the variables, then integrate both sides, The process yields a one-parameter family of implicit solutions.   Solve the separable ODE    Separate the variables:   Integrate both sides:  We thus obtain a one-parameter family of implicit solutions      Solve the IVP    Separate the variables:   Integrate both sides:   We thus obtain a one-parameter family of implicit solutions   The initial condition should give us a particular solution   We thus obtain a particular implicit solution   This solution can actually be made explicit by solving for in terms of . Multiply both sides by 2 and take the square root,   Since , we should take the positive branch. So is the explicit solution of the IVP.   The solution makes sense when Solving this inequality is not possible without a computer. So we will leave it as is.   Conclusion: The solution is It is defined when       Implicit solution vs explicit solution  In this section, we discuss the difference between an implicit solution and an explicit solution.   If you are given an ODE without initial values, then a one-parameter family of implicit solutions is sufficient.  If you are given an IVP, whenever possible, you should try to get the explicit solution and the interval of definition (the interval where the solution is defined).     Suppose we have an initial condition specified for the ODE in , which determines a definite . But it is impossible to solve for in terms of to get the explicit solution. In that case, we have to be satisfied with the implicit solution and ask a computer to handle the function values.  In , we managed to solve for in terms of , but was not able to solve for the interval of definition by hand. Nevertheless, we can still ask a computer to solve for the interval of definition. For , the computer would say that the solution makes sense on . But we should exclude the endpoint and use instead, because the function is not differentiable at the boundary point. Excluding the boundary points and use an open interval is a convention. But exceptions do exist. We shall not require this technical matter in this course.  The interval of definition, as its name hints, should consist of only one interval that contains the initial -value. In case the solution is defined on multiple intervals, we should pick the interval that contains the initial -value.     Solve the ODE    Separate the variables:   Integrate both sides:    We thus obtain a one-parameter family of implicit solutions     Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the positive branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .     Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the negative branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .     The explicit solution contains more information than the implicit solution. Indeed, Observe that  The positive or negative branch cannot be seen in the implicit solution.  The interval of definition cannot be determined by the implicit solution.  This is why whenever it is possible, we should try to solve for the explicit solution and the interval of definition.    From and , we also see that the positive or negative branch and the interval of definition depends on the initial condition. Thus these notions make no sense for a one-parameter family of solutions. This is why without the initial condition, we can leave the solution in the implicit form.     Singular solutions  We saw that has a one-parameter family of implicit solutions.    It is not the general solution because the family does not include the solution . Such an extra solution is called a singular solution .  Another example is which has a one-parameter family of solutions while is a singular solution.  Generally, for a separable ODE the constant function is a singular solution for every number satisfying (Clearly, )  When we separate the variables, we divided both sides by Such an operation implicitly required that Therefore, in the subsequent one-parameter family of solutions obtained by integration, the constant functions with will not be included in the family.  Singular solutions are common for nonlinear ODEs.   "
},
{
  "id": "subsec-separable-equations-1-2",
  "level": "2",
  "url": "sec-separable-equations.html#subsec-separable-equations-1-2",
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
  "title": "Solve the separable ODE <span class=\"process-math\">\\(\\dfrac{dy}{dx} = \\dfrac{e^x - x}{e^{-y} + y}\\)<\/span>.",
  "body": " Solve the separable ODE    Separate the variables:   Integrate both sides:  We thus obtain a one-parameter family of implicit solutions    "
},
{
  "id": "ex-separable-2",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-2",
  "type": "Example",
  "number": "1.6.2",
  "title": "Solve the IVP <span class=\"process-math\">\\(\\dfrac{dy}{dx} = \\dfrac{x^2 + \\sin x}{y}, \\quad y(0) = 1\\)<\/span>.",
  "body": " Solve the IVP    Separate the variables:   Integrate both sides:   We thus obtain a one-parameter family of implicit solutions   The initial condition should give us a particular solution   We thus obtain a particular implicit solution   This solution can actually be made explicit by solving for in terms of . Multiply both sides by 2 and take the square root,   Since , we should take the positive branch. So is the explicit solution of the IVP.   The solution makes sense when Solving this inequality is not possible without a computer. So we will leave it as is.   Conclusion: The solution is It is defined when    "
},
{
  "id": "subsec-implicit-vs-explicit-4",
  "level": "2",
  "url": "sec-separable-equations.html#subsec-implicit-vs-explicit-4",
  "type": "Remark",
  "number": "1.6.3",
  "title": "",
  "body": "  Suppose we have an initial condition specified for the ODE in , which determines a definite . But it is impossible to solve for in terms of to get the explicit solution. In that case, we have to be satisfied with the implicit solution and ask a computer to handle the function values.  In , we managed to solve for in terms of , but was not able to solve for the interval of definition by hand. Nevertheless, we can still ask a computer to solve for the interval of definition. For , the computer would say that the solution makes sense on . But we should exclude the endpoint and use instead, because the function is not differentiable at the boundary point. Excluding the boundary points and use an open interval is a convention. But exceptions do exist. We shall not require this technical matter in this course.  The interval of definition, as its name hints, should consist of only one interval that contains the initial -value. In case the solution is defined on multiple intervals, we should pick the interval that contains the initial -value.   "
},
{
  "id": "ex-separable-3",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-3",
  "type": "Example",
  "number": "1.6.4",
  "title": "Solve the ODE <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}\\)<\/span>.",
  "body": " Solve the ODE    Separate the variables:   Integrate both sides:    We thus obtain a one-parameter family of implicit solutions   "
},
{
  "id": "ex-separable-4",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-4",
  "type": "Example",
  "number": "1.6.5",
  "title": "Solve the IVP <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}, \\, y(\\sqrt{3}) = \\dfrac{1}{2}\\)<\/span>.",
  "body": " Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the positive branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .   "
},
{
  "id": "ex-separable-5",
  "level": "2",
  "url": "sec-separable-equations.html#ex-separable-5",
  "type": "Example",
  "number": "1.6.6",
  "title": "Solve the IVP <span class=\"process-math\">\\(y' = xy^3(1 + x^2)^{-1\/2}, \\, y(\\sqrt{3}) = -\\dfrac{1}{4}\\)<\/span>.",
  "body": " Solve the IVP   We have obtained a one-parameter family of implicit solutions in , namely, We shall continue from here.   We determine the constant by using the initial condition:   The implicit solution we thus obtained is It is possible to solve an explicit solution. Take the negative reciprocal and simplify, Now take the square root. Since , we take the negative branch, thus   Solution exists when    Conclusion: The solution is The interval of definition is .   "
},
{
  "id": "subsec-implicit-vs-explicit-8",
  "level": "2",
  "url": "sec-separable-equations.html#subsec-implicit-vs-explicit-8",
  "type": "Remark",
  "number": "1.6.7",
  "title": "",
  "body": " The explicit solution contains more information than the implicit solution. Indeed, Observe that  The positive or negative branch cannot be seen in the implicit solution.  The interval of definition cannot be determined by the implicit solution.  This is why whenever it is possible, we should try to solve for the explicit solution and the interval of definition.  "
},
{
  "id": "subsec-implicit-vs-explicit-9",
  "level": "2",
  "url": "sec-separable-equations.html#subsec-implicit-vs-explicit-9",
  "type": "Remark",
  "number": "1.6.8",
  "title": "",
  "body": " From and , we also see that the positive or negative branch and the interval of definition depends on the initial condition. Thus these notions make no sense for a one-parameter family of solutions. This is why without the initial condition, we can leave the solution in the implicit form.  "
},
{
  "id": "subsec-separable-equations-3-3",
  "level": "2",
  "url": "sec-separable-equations.html#subsec-separable-equations-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular solution "
},
{
  "id": "sec-existence-uniqueness",
  "level": "1",
  "url": "sec-existence-uniqueness.html",
  "type": "Section",
  "number": "1.7",
  "title": "Existence and Uniqueness of Solutions",
  "body": " Existence and Uniqueness of Solutions  For the application of ODEs in science and engineering, when we modeled a problem into an initial value problem, normally we expect the solution to exist and be unique. However, this is not always the case.   Pathological IVP - Examples     This IVP has two solutions :    If a system is modeled by an IVP that does not have a unique solution, then we cannot possibly predict how the system behaves. This can also happen for linear ODEs. We shall call such IVPs pathological .      Standard form:  Integrating factor:  General solution:  Plug in the initial value: This means for every real number , is a solution of the IVP. The IVP has infinitely many solutions.        We have obtained the general solution in :  Plug in the initial value: , impossible. In other words, The IVP has no solutions.     Summary: A pathological IVP may have no solution \/ more than one solution \/ infinitely many solutions . To determine if an IVP is reasonably posed, we need the existence and uniqueness theorem.    Existence and Uniqueness Theorem: Linear version.   Existence and Uniqueness Theorem: Linear version.   Consider the IVP where the ODE is linear and in its standard form . Assume that:   Both and are continuous on an open interval  The open interval contains the initial time   Then there exists a unique function  over the interval that solves the IVP.     Interval of Existence and Uniqueness   The interval of existence and uniqueness is an interval where the solution of the IVP exists uniquely. For brevity, we call it the interval of existence .    allows us to determine the interval of existence without solving the IVP . To obtain the interval, we follow the following procedure.   Find out the standard form of the ODE and specify the initial condition  Find out the singular points, which are the points where and are not continuous. These singular points separate the real line into disjoint open intervals  If is a singular point, we have a pathological IVP. If is not a singular point, then the interval of existence is just the interval that contains that are bounded by the singular points. Note that does not matter here.       Standard form:  Both and blow up at So is a singular point.  (Missing a diagram here)   Interval of existence =    The solution of the IVP is that is defined on So if we talk about the interval of definition of the solution, it is But this doesn't change the fact that is a singular point. Generally, we should not be concerned about the solution outside the interval of existence, namely       Standard form:  is not continuous when and  is not continuous when  (Missing a diagram here)   Interval of existence =       The standard form is  is not continuous when or  Recall:  So is not continuous when or Note that and  is not continuous when , or where  So the singular points are and   Interval of existence =    Recall in , we studied the IVP Since is not continuous at , the IVP only has a unique solution on Indeed, for every number  is a solution (the IVP has infinitely many solutions). Only with the additional continuity condition did us obtain a unique solution.     Existence and Uniqueness Theorem: Nonlinear case   Existence and Uniqueness Theorem: Nonlinear case   Consider the IVP  Assume that:   The function is continuous NEAR  i.e., one can find small such that is continuous in the rectangular region   The function is continuous NEAR    Then a unique solution  exists NEAR  i.e., there exists a small such that a solution exists on  Likewise, any IVP that does not satisfy the conditions of the theorem is pathological .  (Missing a diagram here.)      The theorem is not as strong as the linear version. It only concludes local existence. It does not tell us the interval of existence.  Nevertheless, the theorem tells if an IVP is reasonably formulated.        is continuous everywhere.  is continuous when   (away from  (Missing a diagram here.)  So the IVP has a unique solution near       is continuous everywhere.  is continuous when   (on  (Missing a diagram here.)  The IVP does not satisfy the conditions of the theorem. Indeed, it is straightforward to check that and are all solutions of the IVP.    Find out all , such that the IVP is reasonably formulated.   is continuous when  is continuous when   (Missing a diagram here.)  So should satisfy     You should always take the “interior” of the region where the functions and are continuous. You should not keep the boundary.  Rigorously speaking, the existence and uniqueness theorem only guarantees that an IVP is reasonably formulated if the conditions are satisfied. Logically, it is possible that an IVP still has a unique solution when the conditions are not satisfied. But this is not a topic we shall explore in this course. We shall call any IVP that does not satisfy the conditions of the theorem pathological .  None of the technicalities in this remark shall be required in this course.     "
},
{
  "id": "ex-existence-uniqueness-0",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-0",
  "type": "Example",
  "number": "1.7.1",
  "title": "<span class=\"process-math\">\\(\\dfrac{dy}{dx} = x\\sqrt{y}, \\, y(0) = 0\\)<\/span>.",
  "body": "   This IVP has two solutions :   "
},
{
  "id": "subsec-existence-uniqueness-1-3",
  "level": "2",
  "url": "sec-existence-uniqueness.html#subsec-existence-uniqueness-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pathological "
},
{
  "id": "ex-existence-uniqueness-1",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-1",
  "type": "Example",
  "number": "1.7.2",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(0) = 1\\)<\/span>.",
  "body": "    Standard form:  Integrating factor:  General solution:  Plug in the initial value: This means for every real number , is a solution of the IVP. The IVP has infinitely many solutions.   "
},
{
  "id": "ex-existence-uniqueness-2",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-2",
  "type": "Example",
  "number": "1.7.3",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(0) = 0\\)<\/span>.",
  "body": "    We have obtained the general solution in :  Plug in the initial value: , impossible. In other words, The IVP has no solutions.    "
},
{
  "id": "thm-existence-uniqueness-linear",
  "level": "2",
  "url": "sec-existence-uniqueness.html#thm-existence-uniqueness-linear",
  "type": "Theorem",
  "number": "1.7.4",
  "title": "Existence and Uniqueness Theorem: Linear version..",
  "body": " Existence and Uniqueness Theorem: Linear version.   Consider the IVP where the ODE is linear and in its standard form . Assume that:   Both and are continuous on an open interval  The open interval contains the initial time   Then there exists a unique function  over the interval that solves the IVP.   "
},
{
  "id": "def-existence-uniqueness-interval",
  "level": "2",
  "url": "sec-existence-uniqueness.html#def-existence-uniqueness-interval",
  "type": "Definition",
  "number": "1.7.5",
  "title": "Interval of Existence and Uniqueness.",
  "body": " Interval of Existence and Uniqueness   The interval of existence and uniqueness is an interval where the solution of the IVP exists uniquely. For brevity, we call it the interval of existence .   "
},
{
  "id": "ex-existence-uniqueness-3",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-3",
  "type": "Example",
  "number": "1.7.6",
  "title": "<span class=\"process-math\">\\(ty' + (t - 1)y = -e^{-t}, \\, y(\\ln 2) = \\dfrac{1}{2}\\)<\/span>.",
  "body": "    Standard form:  Both and blow up at So is a singular point.  (Missing a diagram here)   Interval of existence =  "
},
{
  "id": "subsec-existence-uniqueness-2-7",
  "level": "2",
  "url": "sec-existence-uniqueness.html#subsec-existence-uniqueness-2-7",
  "type": "Remark",
  "number": "1.7.7",
  "title": "",
  "body": " The solution of the IVP is that is defined on So if we talk about the interval of definition of the solution, it is But this doesn't change the fact that is a singular point. Generally, we should not be concerned about the solution outside the interval of existence, namely  "
},
{
  "id": "ex-existence-uniqueness-4",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-4",
  "type": "Example",
  "number": "1.7.8",
  "title": "<span class=\"process-math\">\\((t - 3)y' + (\\ln t)y = 2t, \\, y(1) = 2.\\)<\/span>.",
  "body": "    Standard form:  is not continuous when and  is not continuous when  (Missing a diagram here)   Interval of existence =  "
},
{
  "id": "ex-existence-uniqueness-5",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-5",
  "type": "Example",
  "number": "1.7.9",
  "title": "<span class=\"process-math\">\\(\\sin(2t) y' + \\tan(4t) y = \\dfrac{1}{t}, \\, y\\left(\\dfrac{\\pi}{4}\\right) = 0.\\)<\/span>.",
  "body": "    The standard form is  is not continuous when or  Recall:  So is not continuous when or Note that and  is not continuous when , or where  So the singular points are and   Interval of existence =  "
},
{
  "id": "subsec-existence-uniqueness-2-10",
  "level": "2",
  "url": "sec-existence-uniqueness.html#subsec-existence-uniqueness-2-10",
  "type": "Remark",
  "number": "1.7.10",
  "title": "",
  "body": " Recall in , we studied the IVP Since is not continuous at , the IVP only has a unique solution on Indeed, for every number  is a solution (the IVP has infinitely many solutions). Only with the additional continuity condition did us obtain a unique solution.  "
},
{
  "id": "thm-existence-uniqueness-nonlinear",
  "level": "2",
  "url": "sec-existence-uniqueness.html#thm-existence-uniqueness-nonlinear",
  "type": "Theorem",
  "number": "1.7.11",
  "title": "Existence and Uniqueness Theorem: Nonlinear case.",
  "body": " Existence and Uniqueness Theorem: Nonlinear case   Consider the IVP  Assume that:   The function is continuous NEAR  i.e., one can find small such that is continuous in the rectangular region   The function is continuous NEAR    Then a unique solution  exists NEAR  i.e., there exists a small such that a solution exists on  Likewise, any IVP that does not satisfy the conditions of the theorem is pathological .  (Missing a diagram here.)   "
},
{
  "id": "subsec-existence-uniqueness-3-3",
  "level": "2",
  "url": "sec-existence-uniqueness.html#subsec-existence-uniqueness-3-3",
  "type": "Remark",
  "number": "1.7.12",
  "title": "",
  "body": "  The theorem is not as strong as the linear version. It only concludes local existence. It does not tell us the interval of existence.  Nevertheless, the theorem tells if an IVP is reasonably formulated.   "
},
{
  "id": "ex-existence-uniqueness-6",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-6",
  "type": "Example",
  "number": "1.7.13",
  "title": "<span class=\"process-math\">\\(y' = y^{\\frac{1}{3}}, \\, y(0) = 1.\\)<\/span>.",
  "body": "    is continuous everywhere.  is continuous when   (away from  (Missing a diagram here.)  So the IVP has a unique solution near  "
},
{
  "id": "ex-existence-uniqueness-7",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-7",
  "type": "Example",
  "number": "1.7.14",
  "title": "<span class=\"process-math\">\\(y' = y^{\\frac{1}{3}}, \\, y(1) = 0.\\)<\/span>.",
  "body": "    is continuous everywhere.  is continuous when   (on  (Missing a diagram here.)  The IVP does not satisfy the conditions of the theorem. Indeed, it is straightforward to check that and are all solutions of the IVP.  "
},
{
  "id": "ex-existence-uniqueness-8",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-existence-uniqueness-8",
  "type": "Example",
  "number": "1.7.15",
  "title": "Find out all <span class=\"process-math\">\\((t_0, y_0)\\text{,}\\)<\/span> such that the IVP<div class=\"displaymath process-math\">\n\\begin{equation*}\ny' = \\sqrt{1 - t^2 - y^2}, \\, y(t_0) = y_0\n\\end{equation*}\n<\/div>is reasonably formulated..",
  "body": " Find out all , such that the IVP is reasonably formulated.   is continuous when  is continuous when   (Missing a diagram here.)  So should satisfy  "
},
{
  "id": "subsec-existence-uniqueness-3-7",
  "level": "2",
  "url": "sec-existence-uniqueness.html#subsec-existence-uniqueness-3-7",
  "type": "Remark",
  "number": "1.7.16",
  "title": "",
  "body": "  You should always take the “interior” of the region where the functions and are continuous. You should not keep the boundary.  Rigorously speaking, the existence and uniqueness theorem only guarantees that an IVP is reasonably formulated if the conditions are satisfied. Logically, it is possible that an IVP still has a unique solution when the conditions are not satisfied. But this is not a topic we shall explore in this course. We shall call any IVP that does not satisfy the conditions of the theorem pathological .  None of the technicalities in this remark shall be required in this course.   "
},
{
  "id": "sec-autonomous",
  "level": "1",
  "url": "sec-autonomous.html",
  "type": "Section",
  "number": "1.8",
  "title": "Autonomous Equations",
  "body": " Autonomous Equations  In many situations, the ODE we use to model a physical system is of the form where the right-hand-side does not depend on . Such an ODE is called an autonomous ODE .  All autonomous ODEs are separable and thus can be solved by the method of separation of variables. However, if we only need the qualitative behavior of the solutions, it is usually more convenient to use the qualitative method.   Equilibrium Solutions  We start with the definition of an equilibrium solution . We say is an equlibrium solution of the autonomous ODE if    So is an equilibrium solution.      So are equilibrium solutions.   We consider only the case where the constant function is the unique solution of the IVP From the existence and uniqueness theorem, it suffices that and are continuous near . This always holds if is a polynomial function.    Stability of Equilibrium Solutions  Let be an equilibrium solution of   is stable from above if for every that is not too far from ,   is unstable from above if for every that is not too far from ,   is stable from below if for every that is not too far from ,    is unstable from below if for every that is not too far from ,    is stable if it is both stable from above and stable from below.    is unstable if it is both unstable from above and unstable from below.    is semistable if it is stable from one side but unstable from the other side.       Qualitative Method  Once we know the equilibrium solutions and their stability, we may determine the asymptotic behavior of the solutions. The asymptotic behavior of the solutions is usually good enough for scientists and engineers to make decisions.   Pollution Model   The ODE is autonomous.  Equilibrium solution:  From the direction field, the solution passing through will never go above  So density of mercury is always below If the lake water stays potable forever.      Falling object from great height, subject to gravity and the air resistance .   The ODE is autonomous.  Equilibrium solution  The equilibrium solution is indeed the terminal velocity. We obtained it without much trouble.  We may also try to get the explicit solution of the IVP by separating the variables:              As you see, although the explicit solution contains much more information, if we only need the asymptotic behavior, it is much more convenient to use the qualitative method.     Equilibriums:  If , then  If , then  If , then  If , then    If an initial condition is given as , then   If an initial condition is given as , then      Instead of drawing the full directional field, we may compress the 2-dimensional plane into one single line, called the phase line .    The phase line can either be drawn vertically or horizontally.      Equilibriums solutions:      In many cases, we do not know the explicity formula for but only its graph. We are still able to carry out the qualitative method.   where the graph of is given as follows.      "
},
{
  "id": "sec-autonomous-2",
  "level": "2",
  "url": "sec-autonomous.html#sec-autonomous-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous ODE "
},
{
  "id": "subsec-equilibrium-solution-2",
  "level": "2",
  "url": "sec-autonomous.html#subsec-equilibrium-solution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "ex-equilibrium-solution-1",
  "level": "2",
  "url": "sec-autonomous.html#ex-equilibrium-solution-1",
  "type": "Example",
  "number": "1.8.1",
  "title": "<span class=\"process-math\">\\(y' = \\frac{1}{2}y - 1.\\)<\/span>.",
  "body": "  So is an equilibrium solution.  "
},
{
  "id": "ex-equilibrium-solution-2",
  "level": "2",
  "url": "sec-autonomous.html#ex-equilibrium-solution-2",
  "type": "Example",
  "number": "1.8.2",
  "title": "<span class=\"process-math\">\\(y' = (y - 1)y(y + 1).\\)<\/span>.",
  "body": "   So are equilibrium solutions.  "
},
{
  "id": "ex-autonomous-1",
  "level": "2",
  "url": "sec-autonomous.html#ex-autonomous-1",
  "type": "Example",
  "number": "1.8.3",
  "title": "Pollution Model.",
  "body": " Pollution Model   The ODE is autonomous.  Equilibrium solution:  From the direction field, the solution passing through will never go above  So density of mercury is always below If the lake water stays potable forever.  "
},
{
  "id": "ex-autonomous-2",
  "level": "2",
  "url": "sec-autonomous.html#ex-autonomous-2",
  "type": "Example",
  "number": "1.8.4",
  "title": "Falling object from great height, subject to gravity <span class=\"process-math\">\\(mg\\)<\/span> and the air resistance <span class=\"process-math\">\\(-kv^2\\text{.}\\)<\/span>.",
  "body": " Falling object from great height, subject to gravity and the air resistance .   The ODE is autonomous.  Equilibrium solution  The equilibrium solution is indeed the terminal velocity. We obtained it without much trouble.  We may also try to get the explicit solution of the IVP by separating the variables:              As you see, although the explicit solution contains much more information, if we only need the asymptotic behavior, it is much more convenient to use the qualitative method.  "
},
{
  "id": "ex-autonomous-3",
  "level": "2",
  "url": "sec-autonomous.html#ex-autonomous-3",
  "type": "Example",
  "number": "1.8.5",
  "title": "<span class=\"process-math\">\\(y' = y(y - 1)(y + 1).\\)<\/span>.",
  "body": "  Equilibriums:  If , then  If , then  If , then  If , then    If an initial condition is given as , then   If an initial condition is given as , then     "
},
{
  "id": "subsec-qualitative-method-6",
  "level": "2",
  "url": "sec-autonomous.html#subsec-qualitative-method-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase line "
},
{
  "id": "ex-autonomous-4",
  "level": "2",
  "url": "sec-autonomous.html#ex-autonomous-4",
  "type": "Example",
  "number": "1.8.6",
  "title": "<span class=\"process-math\">\\(y' = y^2(y^2 - 4) = y^2(y - 2)(y + 2).\\)<\/span>.",
  "body": "  Equilibriums solutions:     "
},
{
  "id": "ex-autonomous-5",
  "level": "2",
  "url": "sec-autonomous.html#ex-autonomous-5",
  "type": "Example",
  "number": "1.8.7",
  "title": "<span class=\"process-math\">\\(y' = f(y)\\)<\/span> where the graph of <span class=\"process-math\">\\(f(y)\\)<\/span> is given as follows..",
  "body": " where the graph of is given as follows.    "
},
{
  "id": "sec-numerical",
  "level": "1",
  "url": "sec-numerical.html",
  "type": "Section",
  "number": "1.9",
  "title": "Numerical Methods",
  "body": " Numerical Methods  Numerical Methods   Applies to every reasonably formulated initial value problem.  Most useful when the analytic methods fail.  Main method for IVP in real world engineering practice.    Euler's method  The idea of Euler's method is simple: we use the direction field to perform linear approximations. We first recall the linear approximation formula  Consider the IVP we choose a small step-size and we approximate by    We read the line element at the point perform the same procedure to get an approximation of    Repeating the process, we may approximate for every     Euler's method  Given the IVP and step-size set If we let be the approximation of then can be obtained from by    Use Euler's method to approximate with step-size  Since we compute that       We computed that   Want: i.e.,   So             0  1  3    1  1.5     2  2     3  2.5     4  3       Summary: General steps in applying Euler's method:   Formulate the formula and simplify in terms of  Determine how many steps you want to compute.  Compute using either a calculator or some software.    Use Euler's method to approximate with step-size  Since we compute that      We computed that   Want: i.e.,   So             0  1  2    1  2     2  3         Error analysis of Euler's method  In , we approximated that  The IVP can be solved directly.  The actual solution is  The approximation is not very good. However, if we use or the approximation will be much better.  To understand the error, we recall Taylor's theorem: In the Euler's method, we only kept the first two terms. The dropped terms can be expressed using Lagrange remainder:    If on Euler's method gives an underestimate of i.e., the estimate is smaller than the actual solution  If on Euler's method gives an overestimate of i.e., the estimate is larger than the actual solution  If changes sign. In that case, we can't tell.  The formula describes the error in one step , thus is called the local truncation error. It is proportional to In particular, lowering means lowering the error.  The final error, aka global truncation error, will accumulate.  In general, if the local truncation , then global truncation error For Euler's method, the GTE      We estimated that Do we have an overestimate or an underestimate?  To find , we take the derivative on both sides of the ODE: Within we can estimate using the values of each step. Recall that Using the data and the formular for , we have They are all positive. It is likely that we have an underestimate.  Warning: This process is not fully rigorous. It provides some evidence that is usually good enough in engineering practices.    If the error of is 0.2 with step-size what would the error be if step-size  We know that the global truncation error is proportional to i.e., We have when So When we have So the error is    We may use this method to decide the step-size so that the error is controlled within a certain precision level.     Other methods  Here are some other methods that are more accurate than Euler's method. Due to limitation of lecture time, we shall not discuss them in detail. Consider the IVP   Improved Euler's method:      Local truncation error , Global truncation error    Runge-Kutta method (RK4)        Local truncation error , Global truncation error     It shall be noted that the RK4 method is the most popular method in practice.   "
},
{
  "id": "alg-euler-method",
  "level": "2",
  "url": "sec-numerical.html#alg-euler-method",
  "type": "Algorithm",
  "number": "1.9.1",
  "title": "Euler’s method.",
  "body": " Euler's method  Given the IVP and step-size set If we let be the approximation of then can be obtained from by  "
},
{
  "id": "ex-euler-method-1",
  "level": "2",
  "url": "sec-numerical.html#ex-euler-method-1",
  "type": "Example",
  "number": "1.9.2",
  "title": "<span class=\"process-math\">\\(y' = t - y + 1, \\, y(1) = 3.\\)<\/span> Use Euler’s method to approximate <span class=\"process-math\">\\(y(3)\\)<\/span> with step-size <span class=\"process-math\">\\(h = 0.5.\\)<\/span>.",
  "body": " Use Euler's method to approximate with step-size  Since we compute that       We computed that   Want: i.e.,   So             0  1  3    1  1.5     2  2     3  2.5     4  3      "
},
{
  "id": "ex-euler-method-2",
  "level": "2",
  "url": "sec-numerical.html#ex-euler-method-2",
  "type": "Example",
  "number": "1.9.4",
  "title": "<span class=\"process-math\">\\(y' = t + y, \\, y(1) = 2.\\)<\/span> Use Euler’s method to approximate <span class=\"process-math\">\\(y(3)\\)<\/span> with step-size <span class=\"process-math\">\\(h = 1.\\)<\/span>.",
  "body": " Use Euler's method to approximate with step-size  Since we compute that      We computed that   Want: i.e.,   So             0  1  2    1  2     2  3      "
},
{
  "id": "subsec-error-analysis-7",
  "level": "2",
  "url": "sec-numerical.html#subsec-error-analysis-7",
  "type": "Observation",
  "number": "1.9.6",
  "title": "",
  "body": "  If on Euler's method gives an underestimate of i.e., the estimate is smaller than the actual solution  If on Euler's method gives an overestimate of i.e., the estimate is larger than the actual solution  If changes sign. In that case, we can't tell.  The formula describes the error in one step , thus is called the local truncation error. It is proportional to In particular, lowering means lowering the error.  The final error, aka global truncation error, will accumulate.  In general, if the local truncation , then global truncation error For Euler's method, the GTE   "
},
{
  "id": "ex-error-analysis-1",
  "level": "2",
  "url": "sec-numerical.html#ex-error-analysis-1",
  "type": "Example",
  "number": "1.9.7",
  "title": "<span class=\"process-math\">\\(y' = t - y + 1, \\, y(1) = 3.\\)<\/span>.",
  "body": "  We estimated that Do we have an overestimate or an underestimate?  To find , we take the derivative on both sides of the ODE: Within we can estimate using the values of each step. Recall that Using the data and the formular for , we have They are all positive. It is likely that we have an underestimate.  Warning: This process is not fully rigorous. It provides some evidence that is usually good enough in engineering practices.  "
},
{
  "id": "ex-error-analysis-2",
  "level": "2",
  "url": "sec-numerical.html#ex-error-analysis-2",
  "type": "Example",
  "number": "1.9.8",
  "title": "<span class=\"process-math\">\\(y' = t - y + 1, \\, y(1) = 3.\\)<\/span> If the error of <span class=\"process-math\">\\(y(3)\\)<\/span> is 0.2 with step-size <span class=\"process-math\">\\(h = 0.5,\\)<\/span> what would the error be if step-size <span class=\"process-math\">\\(h = 0.01?\\)<\/span>",
  "body": " If the error of is 0.2 with step-size what would the error be if step-size  We know that the global truncation error is proportional to i.e., We have when So When we have So the error is  "
},
{
  "id": "subsec-error-analysis-10",
  "level": "2",
  "url": "sec-numerical.html#subsec-error-analysis-10",
  "type": "Remark",
  "number": "1.9.9",
  "title": "",
  "body": " We may use this method to decide the step-size so that the error is controlled within a certain precision level.  "
},
{
  "id": "sec-2nd-order-linear-gen-theory",
  "level": "1",
  "url": "sec-2nd-order-linear-gen-theory.html",
  "type": "Section",
  "number": "2.1",
  "title": "General Theories of Second-order Linear ODEs",
  "body": " General Theories of Second-order Linear ODEs  From , the standard form of a second-order linear ODE is If , then the ODE is said to be homogeneous . Otherwise, we say the ODE is nonhomogeneous .  Unlike the first-order ODE where a formula gives the general solution (see ), for second- and higher-order linear ODEs, we do not know how to solve them in general. In this course we will only focus on some special types of second-order linear ODEs that appear frequently in science and engineering courses.  We start with some general theories.   Existence and Uniqueness Theorem   Existence and Uniqueness Theorem   For the IVP   If are continuous in an interval that contains , then the IVP has a unique solution on .    The proof of this theorem is beyond the level of this course. We shall focus on using it. Just like in , we may use the theorem to find the interval of existence.   Find the interval of existence of the IVP   Standard form:  Singularity:   Interval of existence:    In what follows, all the results are supposed to hold on the interval of existence.     Principle of Superposition   Principle of Superposition    If are solutions of a 2 nd -order linear homogeneous ODE then for every real number , the function is also a solution.  In addition, if are linearly independent, i.e., if and are not proportional to each other, then the general solution of the ODE is       Check that are solutions of the ODE What does the principle of superposition tell us?   are solutions:     is also a solution.    is also a solution.   We check that that is not a constant. So and are linearly independent, the theorem implies is the general solution.     The proof of the first part of the superposition principle is not much more difficult than what we did in the example above. I'll leave it as an exercise. The second part, however, is a consequence of . The proof is not difficult, but for the sake of brevity, we shall not prove it here.     Wronskian for linear independence   Wronskian for linear independence   If are solutions of the 2 nd -order linear homogeneous ODE on an interval where the existence and uniqueness theorem holds, then are linearly independent if and only if the Wronskian is nonzero on the interval.     It suffices that on one point of the interval. The proof is not difficult. But for the sake of brevity, we shall not prove it here.        So are linearly independent.        So are linearly dependent.               Set . Then So are linearly dependent.    "
},
{
  "id": "sec-2nd-order-linear-gen-theory-2",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous nonhomogeneous "
},
{
  "id": "th-existence-and-uniqueness-theorem-2nd-order",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#th-existence-and-uniqueness-theorem-2nd-order",
  "type": "Theorem",
  "number": "2.1.1",
  "title": "Existence and Uniqueness Theorem.",
  "body": " Existence and Uniqueness Theorem   For the IVP   If are continuous in an interval that contains , then the IVP has a unique solution on .   "
},
{
  "id": "sec-2nd-order-linear-gen-theory-5-4",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-5-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "Find the interval of existence of the IVP <span class=\"process-math\">\\(t^2y'' - 4ty' + 4y = 0, \\, y(1) = 1, \\, y'(1) = 4\\)<\/span>.",
  "body": " Find the interval of existence of the IVP   Standard form:  Singularity:   Interval of existence:  "
},
{
  "id": "sec-2nd-order-linear-gen-theory-5-5",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-5-5",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " In what follows, all the results are supposed to hold on the interval of existence.  "
},
{
  "id": "th-linear-independence-superposition",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#th-linear-independence-superposition",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "Principle of Superposition.",
  "body": " Principle of Superposition    If are solutions of a 2 nd -order linear homogeneous ODE then for every real number , the function is also a solution.  In addition, if are linearly independent, i.e., if and are not proportional to each other, then the general solution of the ODE is     "
},
{
  "id": "sec-2nd-order-linear-gen-theory-6-3",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-6-3",
  "type": "Example",
  "number": "2.1.5",
  "title": "Check that <span class=\"process-math\">\\(y_1 = e^{3t}, \\, y_2 = e^{-t}\\)<\/span> are solutions of the ODE <span class=\"process-math\">\\(y'' - 2y' - 3y = 0.\\)<\/span> What does the principle of superposition tell us?",
  "body": " Check that are solutions of the ODE What does the principle of superposition tell us?   are solutions:     is also a solution.    is also a solution.   We check that that is not a constant. So and are linearly independent, the theorem implies is the general solution.   "
},
{
  "id": "sec-2nd-order-linear-gen-theory-6-4",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-6-4",
  "type": "Remark",
  "number": "2.1.6",
  "title": "",
  "body": " The proof of the first part of the superposition principle is not much more difficult than what we did in the example above. I'll leave it as an exercise. The second part, however, is a consequence of . The proof is not difficult, but for the sake of brevity, we shall not prove it here.  "
},
{
  "id": "th-wronskian-for-linear-independence",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#th-wronskian-for-linear-independence",
  "type": "Theorem",
  "number": "2.1.7",
  "title": "Wronskian for linear independence.",
  "body": " Wronskian for linear independence   If are solutions of the 2 nd -order linear homogeneous ODE on an interval where the existence and uniqueness theorem holds, then are linearly independent if and only if the Wronskian is nonzero on the interval.   "
},
{
  "id": "sec-2nd-order-linear-gen-theory-7-3",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-7-3",
  "type": "Fact",
  "number": "2.1.8",
  "title": "",
  "body": " It suffices that on one point of the interval. The proof is not difficult. But for the sake of brevity, we shall not prove it here.  "
},
{
  "id": "sec-2nd-order-linear-gen-theory-7-4",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-7-4",
  "type": "Example",
  "number": "2.1.9",
  "title": "<span class=\"process-math\">\\(t^2y'' - 4ty' + 6y = 0, \\, y_1 = t^2, \\, y_2 = t^3.\\)<\/span>.",
  "body": "     So are linearly independent.  "
},
{
  "id": "sec-2nd-order-linear-gen-theory-7-5",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-7-5",
  "type": "Example",
  "number": "2.1.10",
  "title": "<span class=\"process-math\">\\(y'' - 9y = 0, \\, y_1 = e^{3t}, \\, y_2 = 5e^{3t}.\\)<\/span>.",
  "body": "     So are linearly dependent.  "
},
{
  "id": "ex-wronskian-real-distinct-roots",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#ex-wronskian-real-distinct-roots",
  "type": "Example",
  "number": "2.1.11",
  "title": "<span class=\"process-math\">\\(ay'' + by' + cy = 0, \\, y_1 = e^{r_1 t}, \\, y_2 = e^{r_2 t}, \\, r_1 \\neq r_2.\\)<\/span>.",
  "body": "        "
},
{
  "id": "sec-2nd-order-linear-gen-theory-7-7",
  "level": "2",
  "url": "sec-2nd-order-linear-gen-theory.html#sec-2nd-order-linear-gen-theory-7-7",
  "type": "Example",
  "number": "2.1.12",
  "title": "<span class=\"process-math\">\\(y'' - \\cot(2t)y' = 0, \\, y_1 = \\sin^2 t, \\, y_2 = \\cos(2t) - 1.\\)<\/span>.",
  "body": "   Set . Then So are linearly dependent.  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real",
  "level": "1",
  "url": "sec-2nd-order-linear-const-coeff-real.html",
  "type": "Section",
  "number": "2.2",
  "title": "Second-order Linear ODEs with Constant Coefficients - Real Roots",
  "body": " Second-order Linear ODEs with Constant Coefficients - Real Roots   Auxiliary Equation  Consider the ODE where are constant numbers. This particular type of ODE can be solved, and are widely used in science and engineering.  To solve this ODE, we try the function Then This means that if is a solution, then necessarily, is a root of the quadratic equation We call it the auxiliary equation .    The case of two distinct real roots  If the auxiliary equation has two distinct real roots , then are solutions, with (see ). Then by the principle of superposition , is the general solution.    Auxiliary equation:  General solution:     Auxiliary equation:  General solution:     Auxiliary equation:  General solution:     Auxiliary equation:  General solution:     Initial Value Problems and Long-term behaviors  Knowing the general solution, we can solve initial value problems and analyze the long-term behavior of the solution.   Find the solution and determine the long-term behavior.   Auxiliary equation:  General solution:  From the initial values:  Solving the system, we obtain    So the solution is As , the second term approaches zero. The solution is dominated by the first term, which approaches    Determine the critical value of where the long-term behavior changes.   Auxiliary equation:  General solution:  From the initial values:  Solving the system, we obtain    So the solution is As , the solution is dominated by the second term. Note that Thus, the long-term behavior changes when     "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-2-3",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "auxiliary equation "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-3-3",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-3-3",
  "type": "Example",
  "number": "2.2.1",
  "title": "<span class=\"process-math\">\\(y'' - 2y' - 3y = 0.\\)<\/span>.",
  "body": "  Auxiliary equation:  General solution:  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-3-4",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-3-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "<span class=\"process-math\">\\(y'' - 5y' + 6y = 0.\\)<\/span>.",
  "body": "  Auxiliary equation:  General solution:  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-3-5",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-3-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "<span class=\"process-math\">\\(y'' - 5y' - 6y = 0.\\)<\/span>.",
  "body": "  Auxiliary equation:  General solution:  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-3-6",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-3-6",
  "type": "Example",
  "number": "2.2.4",
  "title": "<span class=\"process-math\">\\(2y'' - 7y' + 3y = 0.\\)<\/span>.",
  "body": "  Auxiliary equation:  General solution:  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-4-3",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-4-3",
  "type": "Example",
  "number": "2.2.5",
  "title": "<span class=\"process-math\">\\(y'' - 4y' - 6y = 0, \\, y(0) = 1, \\, y'(0) = 0.\\)<\/span> Find the solution and determine the long-term behavior..",
  "body": " Find the solution and determine the long-term behavior.   Auxiliary equation:  General solution:  From the initial values:  Solving the system, we obtain    So the solution is As , the second term approaches zero. The solution is dominated by the first term, which approaches  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-real-4-4",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-real.html#sec-2nd-order-linear-const-coeff-real-4-4",
  "type": "Example",
  "number": "2.2.6",
  "title": "<span class=\"process-math\">\\(y'' - 5y' + 6y = 0, \\, y(0) = \\alpha, \\, y'(0) = 1.\\)<\/span> Determine the critical value of <span class=\"process-math\">\\(\\alpha\\)<\/span> where the long-term behavior changes..",
  "body": " Determine the critical value of where the long-term behavior changes.   Auxiliary equation:  General solution:  From the initial values:  Solving the system, we obtain    So the solution is As , the solution is dominated by the second term. Note that Thus, the long-term behavior changes when   "
},
{
  "id": "sec-complex-numbers",
  "level": "1",
  "url": "sec-complex-numbers.html",
  "type": "Section",
  "number": "2.3",
  "title": "Complex Numbers",
  "body": " Complex Numbers   Multiplication  A complex number is of the form , where are real numbers, and Note that  is called the real part, is called the imaginary part.  Multiplication:    Examples:         Geometric Interpretation  A complex number may be identified with a point in the two-dimensional plane, called the complex plane.     Example:      Example:        Euler Formula  The famous Euler’s formula reads More generally, Indeed, this formula is nothing more than the polar-coordinate transformation Given a complex number , the number , called the amplitude , is precisely the distance between and the origin, The angle , called the phase, is precisely the angle formed from the x-axis to the line connecting the origin and In formulas,      Examples:         Examples:           Geometric Interpretation of Multiplication  Consider two complex numbers Then multiplying these two complex numbers ends up with   Proof: Here we used the fact that and   Geometrically, this means that the amplitude of the product is the product of amplitudes, and phase of the product is the sum of the phases.  Example:           Powers and Roots  To square the complex number using the previous description of multiplications, we obtain Generally, for an integer , the -th power of is simply   The roots, on the other hand, are more complicated. Generally, the -th root has different candidates.  Let If then While the amplitude is unique, the phase is not unique .  Indeed,  This is to say that Correspondingly, for  are candidates of roots for  Example:       Example:  may possibly be i.e.       "
},
{
  "id": "subsec-Euler-formula-2",
  "level": "2",
  "url": "sec-complex-numbers.html#subsec-Euler-formula-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler’s formula amplitude "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex",
  "level": "1",
  "url": "sec-2nd-order-linear-const-coeff-complex.html",
  "type": "Section",
  "number": "2.4",
  "title": "Second-order Linear ODEs with Constant Coefficients - Complex Roots",
  "body": " Second-order Linear ODEs with Constant Coefficients - Complex Roots   The case of (distinct) complex roots  Consider the ODE where are constant numbers. We tried the function and got the auxiliary equation If the quadratic equation has two complex roots, then these two roots are distinct and can be written as In this case, we obtain two complex solutions Using Euler's formula, we may write them as Note that Note also that are conjugate to each other.   If is a complex solution of then both the real part and the imaginary part are solutions of the ODE as well.    Proof. Note that Therefore, Recall that So we conclude that Therefore, both and are solutions.   If the auxiliary equation of has complex solutions then the general solution of the ODE is    Proof. We already have the complex solutions  implies that are both solutions. Note that So are linearly independent. The conclusion follows.     Auxiliary Equation:  General solution:        Auxiliary Equation:  General solution:        Auxiliary Equation:  General solution:       Oscillation Patterns  For real numbers and  with In other words, any linear combination of sine and cosine functions of the same angle can be rewritten as a single cosine function, representing an oscillation with amplitude and phase    Amplitude and phase of linear combinations of sine and cosine functions               Oscillation Patterns    For the ODE in , we rewrite the general solution as Then the amplitude stays still.       For the ODE in , we rewrite the general solution as Then the amplitude decays exponentially.       For the ODE in , we rewrite the general solution as Then the amplitude grows exponentially.        In general, if are the roots of the auxiliary equation for the ODE then  Steady Oscillation.  Decaying Oscillation.  Growing Oscillation.    Note that the oscillation pattern depends only on the differential equation itself. It does not depend much on the initial condition (unless it leads to the zero solution).    "
},
{
  "id": "th-complex-solution-real-solution",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#th-complex-solution-real-solution",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "",
  "body": " If is a complex solution of then both the real part and the imaginary part are solutions of the ODE as well.   "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex-2-5",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#sec-2nd-order-linear-const-coeff-complex-2-5",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": " If the auxiliary equation of has complex solutions then the general solution of the ODE is   "
},
{
  "id": "ex-complex-roots-1",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#ex-complex-roots-1",
  "type": "Example",
  "number": "2.4.3",
  "title": "<span class=\"process-math\">\\(y'' + y = 0.\\)<\/span>.",
  "body": "   Auxiliary Equation:  General solution:    "
},
{
  "id": "ex-complex-roots-2",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#ex-complex-roots-2",
  "type": "Example",
  "number": "2.4.4",
  "title": "<span class=\"process-math\">\\(y'' + 2y' + 8y = 0.\\)<\/span>.",
  "body": "   Auxiliary Equation:  General solution:    "
},
{
  "id": "ex-complex-roots-3",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#ex-complex-roots-3",
  "type": "Example",
  "number": "2.4.5",
  "title": "<span class=\"process-math\">\\(y'' - y' + y = 0.\\)<\/span>.",
  "body": "   Auxiliary Equation:  General solution:    "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex-3-2",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#sec-2nd-order-linear-const-coeff-complex-3-2",
  "type": "Fact",
  "number": "2.4.6",
  "title": "",
  "body": "For real numbers and  with In other words, any linear combination of sine and cosine functions of the same angle can be rewritten as a single cosine function, representing an oscillation with amplitude and phase  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex-3-3",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#sec-2nd-order-linear-const-coeff-complex-3-3",
  "type": "Example",
  "number": "2.4.7",
  "title": "Amplitude and phase of linear combinations of sine and cosine functions.",
  "body": " Amplitude and phase of linear combinations of sine and cosine functions             "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex-3-4",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#sec-2nd-order-linear-const-coeff-complex-3-4",
  "type": "Example",
  "number": "2.4.8",
  "title": "Oscillation Patterns.",
  "body": " Oscillation Patterns    For the ODE in , we rewrite the general solution as Then the amplitude stays still.       For the ODE in , we rewrite the general solution as Then the amplitude decays exponentially.       For the ODE in , we rewrite the general solution as Then the amplitude grows exponentially.       "
},
{
  "id": "sec-2nd-order-linear-const-coeff-complex-3-6",
  "level": "2",
  "url": "sec-2nd-order-linear-const-coeff-complex.html#sec-2nd-order-linear-const-coeff-complex-3-6",
  "type": "Remark",
  "number": "2.4.9",
  "title": "",
  "body": " Note that the oscillation pattern depends only on the differential equation itself. It does not depend much on the initial condition (unless it leads to the zero solution).  "
},
{
  "id": "sec-2nd-order-linear-const-coeff-repeated",
  "level": "1",
  "url": "sec-2nd-order-linear-const-coeff-repeated.html",
  "type": "Section",
  "number": "2.5",
  "title": "Second-order Linear ODEs with Constant Coefficients - Repeated Real Roots",
  "body": " Second-order Linear ODEs with Constant Coefficients - Repeated Real Roots  Consider the ODE     where are constant numbers. We tried the function and got the auxiliary equation     If the quadratic equation has two repeated roots in this case, we only obtain one solution     Another solution may be obtained (via cheating) by     So the general solution is     Example 1:   Auxiliary equation:  General solution:  Example 2:   Auxiliary equation:  General solution:  Example 3: For the IVP     find the critical value of where the long-term behavior changes.  Auxiliary equation:  General solution:    Solution of the IVP:  As the solution no matter how is chosen.  However, there are two ways approaching zero:  If then If then  The long-term behavior changes when  Solution of the IVP:       For        For       How do we know we should multiply by It is a result of a very standard technique called variation of parameters.  Philosophy: If you know one solution then since the ODE is linear, for any number the function would also be a solution.  Variation of parameter simply means that replacing the numerical parameter with a function i.e., set     Plugging it back into the ODE, we may get an (usually much simpler) ODE for By solving for we may obtain  In the context of linear homogeneous ODE, the technique is usually referred to as reduction of order.  Let be a solution of the homogeneous linear ODE   We set and require that is another solution. This means that   Expanding the left-hand-side      we obtain a second-order ODE of that involves only and .  This ODE is essentially a first-order separable ODE of , i.e.,   Solving then integrate, we obtain and thus  Remarks:  1. When formulating the equation for , make sure you read the function from the standard form .  2. Since we only need one that is linearly independent to , when solving for and integrating for , we may make a wise choice of the arbitrary constants. It suffices that  3. It is possible to have a formula for , namely,   I do not recommend using this formula or memorizing it.  Example 1: Let be an ODE whose auxiliary equation has repeated roots . This means that the ODE can be rewritten as   For , we set , then       We may pick , so that  We may pick , so that  Exercise: Check that  We conclude that is the general solution.  Example 2: Knowing that is a solution, find the general solution.  Standard form:  Set To formulate the ODE for we have       Standard form:  Set We obtained that one option of namely,   By incorporating the coefficient into the arbitrary constants, we see that the general solution of the ODE is   "
},
{
  "id": "sec-2nd-order-linear-non-homogeneous",
  "level": "1",
  "url": "sec-2nd-order-linear-non-homogeneous.html",
  "type": "Section",
  "number": "2.6",
  "title": "Second-order Linear Non-Homogeneous ODEs",
  "body": " Second-order Linear Non-Homogeneous ODEs  The general solution of a nonhomogeneous linear ODE   is closely related to the solution of the homogeneous ODE   Principle of Superposition  3. Let be two solutions of Then is a solution of  Proof. The assumption states that    Subtract these two equations, by linearity of derivatives, we get   Thus is a solution of the  Theorem. The general solution of is of the form   where is the general solution of the ODE   is a particular solution of ODE  Proof. We first check that is a solution:     Proof (continued). It remains to check that any solution is of this form. Let be any solution of the nonhomogeneous ODE. Then from the principle of superposition, is a solution of the homogeneous ODE. Thus   for some numbers Thus  Terminologies:  is called the complementary solution.  is called a particular solution.  Solving a nonhomogeneous ODE reduces to two parts: Solve the homogeneous ODE to find the complementary solution, then find a particular solution.  Linear ODE with constant coefficients  For a second order linear nonhomogeneous ODE with constant coefficients   we learned how to find the complementary solution:  We start by forming the auxiliary equation and solve the quadratic equation. Three cases:   Two distinct real roots   Two distinct complex roots   Two repeated real roots    For a second order linear nonhomogeneous ODE with constant coefficients   There are two approaches of finding a particular solution.   Method of Undetermined Coefficients. The method is convenient and easy to generalize to higher-order linear ODEs , but only works for some special classes of (good enough for most engineering practices).  Variation of Parameter (not required). Knowing the complementary solution we may set and solve that    "
},
{
  "id": "sec-undetermined-coeff-2nd-order",
  "level": "1",
  "url": "sec-undetermined-coeff-2nd-order.html",
  "type": "Section",
  "number": "2.7",
  "title": "Method of Undetermined Coefficients - First Ansatz",
  "body": " Method of Undetermined Coefficients - First Ansatz  We use examples to study the method of undetermined coefficients.  Example 1:  Idea: RHS is a constant. We try a constant function.  Solution: Complementary solution:  Set Then   The general solution is   Example 2:  Idea: RHS is a polynomial. We try a polynomial function.  Solution: Complementary solution:  Set Then      The general solution is   Remark: Generally, if the RHS is a polynomial of degree , we set as a generic polynomial of degree  Remark: Even if , when setting , we should start from the highest degree of and go all the way down to the constant term.  Example 3:  Solution: Complementary solution:  Set  Then Then LHS is      General solution:   Example 4:  Idea: RHS is an exponential function. We try an exponential function with the same exponential coefficient.  Solution: Complementary solution:  Set Then    General solution:   Remark: If we choose for it won’t work.  Example 5:  Idea: RHS is a trigonometric function. We try a trigonometric function with the same trigonometric coefficient.  Solution: Complementary solution:  Set  Note that both sin and cos should appear.       General solution:   Remark: This works only for sin and cos, fails for other trigs.  Remark: If we try for the method won’t work.  Important Conceptual Remarks  The method works because:   Derivatives of polynomial functions are polynomials (up to the same degree).  Derivatives of exponential functions are exponential functions (with the same exponential coefficient).  Derivatives of sine and cosine functions are sine and cosine functions (with the same trigonometric coefficient).   For functions without this property, the method fails. You will have to use the integration formula.  The polynomials, exponentials, sine and cosine functions are referred to as the basic types. Observe that products of basic type functions satisfy the same property.  We have seen that for   If (or ), we should set the ansatz as  If (or , or ), we should set the ansatz as  If (or ), we should set the ansatz as  If (or , or ), we should set the ansatz as   This list continues with products of basic types.   If (or ), we should set the ansatz as   Remark: We need an exponential function with the same coefficient. Then we pair it with a generic polynomial.  If (or or ), we should set the ansatz as   Remark: We need both sine and cosine with the same coefficient. We pair both sine and cosine with generic polynomials of the same degrees.  Common mistake that won’t work:     If (or or ), we should set the ansatz as   Remark: We should understand (or or both) as the real parts (or imaginary parts, or both) of and We need both and  If (or or ), we should set the ansatz as   Remark: We need both and Then we pair both of them with generic polynomials of the same degree.   Example 6.  Complementary solution:  Set        So         Thus, we obtain four equations concerning four variables:    Solving the system, we obtain   So   The general solution is   The first ansatz - Summary  All the ansatz from 1-8 can be summarized as follows:  For the ODE with   for some real numbers (where and are not simultaneously zero ), the first ansatz should be set as   (Important) The first ansatz depends only on irrelevant of the left-hand-side.  "
},
{
  "id": "sec-undetermined-coeff-2",
  "level": "1",
  "url": "sec-undetermined-coeff-2.html",
  "type": "Section",
  "number": "2.8",
  "title": "Method of Undetermined Coefficients - Final Ansatz",
  "body": " Method of Undetermined Coefficients - Final Ansatz  The case when the first ansatz fails  Example 1.  Complementary solution:  If we try then   There is no way for  Why does this happen? Notice that appears as a part of the complementary solution while my ansatz is its multiple. When this happens, the first try ansatz fails.  To find a particular solution, we multiply our ansatz by and try again.    Example 2.  Complementary solution:  The first try ansatz is  This ansatz clearly fails, as has the same structure as the complementary solution. We need to multiply by   Then       We do not have terms on the left-hand-side. The equality cannot hold, no matter how are chosen. The second try fails.  We will have to multiply by another and try again.  Now we try:   Then  So,      This means  The general solution:   How to find the final ansatz without trying  Recall: In of Example 1:   The aux. eqn. is  whose exponential coefficient is which is a root that appears once.  We have seen that the first ansatz failed, the second succeeded.   Recall: In of Example 2:   The aux. eqn. is  whose exponential coefficient is which is a root that appears twice.  We have seen that the first and second ansatz failed, the third ansatz succeeded.   Generally, for the ODE where   if the complex number appears as a root for the auxiliary equation for times, then the first ansatz fail. We should modify the first ansatz by  Remark: For convenience, we will call the complex number the exponential coefficient of  Remark: The exponential coefficient is a nonstandard terminology. In higher level mathematics, is indeed an eigenvalue with respect to the differential operator. Its associated eigenfunction is with real part and imaginary part But it’s wrong to call these trigs eigenfunctions.  Remark: Since the ODE is second-order , there are at most two roots for the auxiliary equation, the ansatz at most fails twice.  Example 3:  Aux. Eqn:  Complementary solution:  The first ansatz:  Exponential coefficient: appears as a single root.  First try fails. The final ansatz should be     To compute we may use the binomial theorem  Then        Comparing the coefficients, we see that    So The general solution is   Example 4:  Aux. Eqn:  Comp. Soln:  First ansatz:  Exp. Coeff.: that appear as a single root. First try fails.  Final ansatz:  To compute the derivatives, we may use the following rules:   So             So       General solution:   Note: In the MIT Lecture 13 and 14, there exists a simpler way of computing , using the exponential shift lemma of differential operators and complex functions. We shall not require that in our course.  Sums of functions with different exp coeffs.  We have seen how to solve when   What shall we do if is a sum of such functions but with different α’s and β’s? For example,   To handle such we need the following principle of superposition.  4. Let be a particular solution of   and be a particular solution of   Then is a particular solution of   Proof. The assumption implies that    Adding them up, by linearity of differential operators, we have   Thus satisfies the ODE   The principle of superposition tells us that to handle such   Break according to the exponential coefficients.  Find individually for i.e., for find a particular for  Then is a particular solution.   Example 5.  Aux. Eqn:  Comp. Soln:  Now we regard where   (Note: Terms with the same exponential coefficient should be collected together to avoid unnecessary repetitions.)  First we deal with The first ansatz is The exponential coefficient is that is not a root. First ansatz succeeds.    The first ansatz is  The exponential coefficient is that appears as a single root. First try fails. The final ansatz is   We compute the derivatives and find that      We found solutions   From the principle of superposition,   is a particular solution. The general solution is then   "
},
{
  "id": "sec-higher-order-linear-ODEs",
  "level": "1",
  "url": "sec-higher-order-linear-ODEs.html",
  "type": "Section",
  "number": "2.9",
  "title": "Higher-order Linear ODEs",
  "body": " Higher-order Linear ODEs  Higher order linear ODE – General theory   Homogeneous case: For the ODE    Fundamental set of solutions: that are  solutions of the ODE;  linear independent, i.e., the Wronskian   is nowhere vanishing (won’t require).   Principle of superposition: If forms a fundamental set of solutions, then the general solution of the ODE is    2. Nonhomogeneous case: For the ODE    Structure of general solution: where  the complementary solution, is the general solution of the homogeneous ODE.  a particular solution, is a solution of the nonhomogeneous ODE.    Principle of superposition:  If is a solution of  is a solution of  then is a solution of     Higher order linear ODE with Const. Coeff.   Homogeneous case: For the ODE,   We try and see that   Dividing by we obtain the auxiliary equation    Theorem: Every polynomial with real coefficients can be factored as a product of linear and quadratic polynomials.  Corollary: If is a root that is repeated times, then its conjugate is also a root that is repeated times.  Let be a solution of the auxiliary equation.  Case 1: If is a real single root, then it contributes one function to the fundamental set of solutions.  Case 2: If is a real root repeated times, then it contributes functions   to the fundamental set of solutions.  Case 3: If is a complex single root, then together with its conjugate they contribute two functions  to the fundamental set of solutions.  Case 4: If is a complex root repeated times, then together with they contribute 2m functions   to the fundamental set of solutions.  Example 1:   Auxiliary equation:  General solution:  Example 2:   Auxiliary equation:   General solution:  Example 3:   Auxiliary equation:     General solution:  Example 4:   Auxiliary equation:   General solution:   Example 5:   Auxiliary equation:   General solution:   Example 6:   Auxiliary equation: So  Recall that   Thus   Example 6:   Auxiliary equation: So  Recall that   Thus      General solution:   Higher order linear ODE with Const. Coeff.   Nonhomogeneous case: For the ODE   Variation of parameters would be quite complicated. But the method of coefficients works in the same way.  Step 1: Separate according to exponential coefficients, i.e., write where each is of the form:   For example, if  we should write where    Step 2: We find a particular solution for each   The first ansatz should be set as   where is the largest degree appearing in the polynomial.  If the exponential coefficient does not appear as a root of the auxiliary equation, the first ansatz succeeds.  If is a root repeated times, the final ansatz should be modified by i.e.,   Step 3: Once we find a particular solution for each   the principle of superposition implies that   is a particular solution of the nonhomogeneous ODE.   for  If you wish to ask the computer to carry out the calculation, make sure you plug in the final ansatz for each in  Example 7: Determine the final ansatz for the following ODES.  (a)  Aux. eqn:  The first ansatz Exp. Coeff. = single root.  The final ansatz  (b)  Solutions of the Aux. eqn:  The first ansatz Exp. Coeff. = double root.  The final ansatz  (c)  Aux. eqn:  First ansatz Exp. Coeff. = single root.  Final ansatz  (d)  Aux. eqn:  First ansatz  Exp. Coeff. = that is a double root.  Final ansatz  (e)  Aux. Eqn.   First ansatz Exp. Coeff. = 0 , double root.  Final ansatz  (f)  Aux. eqn.   First ansatz  Exp. Coeff. = -1 + i that is a single root.  Final ansatz  Example 8: Find the general solution of   Aux. Eqn.   Comp. Soln.  Let be a solution of  First ansatz Exp. Coeff. = 1 which is a double root.  Final ansatz Then      So  Let be a solution of  First ansatz Exp. Coeff. = -1 which is a single root.  Final ansatz Then      So  Let be a solution of  First ansatz Exp. Coeff. = -1 which is a single root.  Final ansatz Then      So  Let be a solution of  First ansatz  Exp. Coeff. = 2i , not a root.        So  Let be a solution of  First ansatz  Exp. Coeff. = 0 , not a root.      So  By the principle of superposition,    is a particular solution. The general solution is then    "
},
{
  "id": "sec-laplace-transform",
  "level": "1",
  "url": "sec-laplace-transform.html",
  "type": "Section",
  "number": "3.1",
  "title": "Laplace Transform and Examples",
  "body": " Laplace Transform and Examples  Integral transform  Integral transforms: Let be a function with two real variables. Given a function defined on a set , the following integral   defines a new function . The map sending to is called an integral transform . The function is called the kernel of the integral transform.  Note that when is an infinite interval, the integral defining is improper and might not converge for all real numbers . In this case, the domain of new function , i.e., the set of such that the integral converges, is not expected to be  Integral transforms appears in many discussions of mathematics, physics, engineering, and computer science.  Fourier transform:    complex function  Fourier transform is widely used, including but not limited to, partial differential equations, computer graphics, machine learning, etc. (not required in this course)  In this course, we mainly focus on the Laplace transform , with   The corresponding integral transform   is called the Laplace transform . The function is usually denoted by  The domain of depends on , determined by the convergence of the improper integral, i.e.,  should exist.  Examples of Laplace transforms  Laplace Transform:   Note that the domain of depends on the choice of  Example 1. Evaluate   If , then The integral converges.  In this case,  If , then The integral diverges.  If , then we have  In this case, also diverges.  Conclusion:  \\mathcal{L}\\{1\\} = \\frac{1}{s}, \\quad s \\gt 0.  Example 2. Evaluate    We have seen that converges if and only if In this case, by L'Hôpital's rule.     So  \\mathcal{L}\\{t\\} = \\frac{1}{s^2}, \\quad s \\gt 0.  So we have obtained that for   This defines a recursion of that can be easily solved:    Conclusion:  \\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n + 1}}, \\quad s \\gt 0.  For example   Note that the power of in the denominator is 1 larger than the power of  Example 4. Evaluate and    Clearly, exists when i.e., The limit is zero. So     Clearly, exists when i.e., The limit is zero. So   Example 5. Evaluate    Clearly, exists when i.e., The limit is zero. So  \\mathcal{L}\\{e^{at}\\} = \\frac{1}{s - \\alpha}, \\quad s \\gt \\alpha.  Example 6. Evaluate     Clearly, exists iff  and equals 0.     Clearly when     So we conclude that   Example 7. Evaluate  With a similar procedure, we see that   So we conclude that  \\mathcal{L}\\{\\sin \\beta t\\} = \\frac{\\beta}{s^2 + \\beta^2}, \\quad s \\gt 0.  Example 8. Evaluate  With a similar procedure, we see that   So we conclude that  \\mathcal{L}\\{\\cos \\beta t\\} = \\frac{s}{s^2 + \\beta^2}, \\quad s \\gt 0.  Theorem: For every real numbers   Proof: It follows from the linearity of integrals.     Hyperbolic functions  Recall that from the Euler’s formula, the usual sine and cosine functions may also be expressed as   The hyperbolic functions are defined similarly:   These functions are widely used in engineering practices.  The Laplace transform of hyperbolic functions can be obtained via linearity. For every      Summary of basic formulas for Laplace transform   Power functions   Then by linearity, we may obtain the Laplace transform of all polynomial functions, e.g.,  Exponential functions: for every real number   Trigonometric and hyperbolic functions: for every     When does exist  Recall: A function is piecewise continuous on if in any subinterval the function is continuous everywhere except at finitely many numbers. The discontinuities are either removable or jump.  Definition: A function is said to be of exponential order, if there exist constants and such that for all  In other words, does not grow faster than a constant multiple of a simple exponential function.  Definition: A function is said to be of exponential order, if there exist constants and such that for all  In other words, does not grow faster than a constant multiple of a simple exponential function  Polynomial functions, simple exponential function cosine and sine functions are of exponential order.  The function is not of exponential order, since for every possible   So grows faster than any multiple of  Theorem: If is piecewise continuous on and of exponential order, then exists for  Proof: Since is of exponential order, there exists such that whenever Using the number we rewrite   Since is piecewise continuous, exists.  For we use the inequality to show that   Right-hand side is precisely that exists when In other words, converges absolutely when  Remark: These two conditions are sufficient but not necessary. In other words, exists does not mean that should satisfy these two conditions.  Examples: The function is not piecewise continuous. The function is not of exponential order. But it is not difficult to see that both and exist.  Long term behavior of  Theorem: If is piecewise continuous on and of exponential order, then the function satisfies  Proof: Take as in the previous proof. Since is piecewise continuous on  is bounded. By adjusting we may assume that on   The conclusion then follows from the squeeze theorem.  "
},
{
  "id": "sec-inverse-Laplace",
  "level": "1",
  "url": "sec-inverse-Laplace.html",
  "type": "Section",
  "number": "3.2",
  "title": "Inverse Laplace Transform",
  "body": " Inverse Laplace Transform  Inverse Laplace transform  If represents the Laplace transform of i.e., we would say that is the inverse Laplace transform of and write  Examples:        Remark: There is a general theorem stating that if then for all except for the points of discontinuity of and . In particular, the Laplace transform is a one-to-one mapping only when restricted to the set of continuous functions. We implicitly assume that the image of the inverse Laplace transform is the set of continuous functions.  Since the Laplace transform is linear, its inverse is also linear, i.e., for every real numbers and functions   Examples:        The following formulas of inverse Laplace should be memorized.    For a real number   For real numbers    Laplace Transform of derivatives  Theorem: If is continuous on and of exponential order, and if is piecewise continuous on then   The equality holds for sufficiently large  Proof: It follows from integration by parts.     Since is of exponential order, for sufficiently large  Thus,  Theorem: If are continuous on and of exponential order, and if is piecewise continuous on then for sufficiently large   Proof: It follows from integration by parts.     Since is of exponential order, for sufficiently large  Thus,  Theorem: If are continuous on and are of exponential order, and if is piecewise continuous on then with for sufficiently large   Proof: From integration by parts     Since is of exponential order, for sufficiently large  Thus,  Laplace transform of a linear ODE.  We have learned how to obtain the general solution of   using the auxiliary equation and the method of undetermined coefficients. When initial conditions are given, we need to solve in the process. The process is not always convenient.  Laplace transform provides an alternative way and gives a direct solution of an IVP    Given an IVP    We Laplace transform both sides. Let Then for the derivative, we have    Note that except for the first term, all other terms are known.  So, the Laplace transform of the left-hand side is   while the right-hand side is  Therefore, the Laplace transform on a differential equation ends up with the algebraic equation   from which we may solve explicitly. Indeed,   where is decided by the initial condition. After getting we perform the inverse Laplace transform to obtain that solves the IVP.  Given an IVP    The process of solving the IVP may be summarized as follows:   Find unknown that satisfies DE and initial conditions  Apply Laplace transform  Transformed DE becomes an algebraic equation in  Solve transformed equation for  Apply inverse Laplace transform  Solution of original IVP   Example 1  Solve the IVP   Set Laplace transform both sides:     Then     Partial Fractions - Linear factors  To evaluate  We will need to break the fraction as   We apply the cover-up method to conclude that     So, the solution of the IVP is      Example 2  Solve the IVP   Set Laplace transform both sides:     To find  We will need to break the fraction as   We may use the cover-up method to decide   Then we decide and directly from subtraction:    So   =  =  =  =  "
},
{
  "id": "sec-first-translation-theorem",
  "level": "1",
  "url": "sec-first-translation-theorem.html",
  "type": "Section",
  "number": "3.3",
  "title": "First Translation Theorem",
  "body": " First Translation Theorem  First Translation Theorem  The first translation theorem allows us to handle   Laplace transform of a function with an exponential factor,  Inverse Laplace transform of a fraction with repeated linear factors.   Theorem. If , then  Equivalently,   Proof:   =  Remark: The theorem is also referred to as the s-axis shift since we are shifting the s-coordinate.  Example 1. Evaluate and    Example 2. Evaluate  We first break them into partial fractions.   The cover-up method gives that  Subtract the left-hand-side with the -term.   Therefore    Example 3. Evaluate  We rewrite the denominator as  Recall that    To match up, we reorganize the fraction as   So   =  =  Remark on the irreducible quadratic case  To compute the inverse Laplace of    Process the denominator by completion of square to find and    =  By assumption, is irreducible, then necessarily, Thus    Process the numerator to match up with the in the denominator:     Therefore,     It is not recommended that you memorize formulas for Rather, you should carry out the procedure.  Example (maybe another one).    So,   =  So,     =  Important formulas to keep in mind        Solving an IVP using s-axis shifts.  Example 4.   Set Laplace both sides of the ODE:    Thus    Therefore,   =  =  Remark: You may try the method of undetermined coefficients to find how inconvenient it is.  Example 5.   Set Laplace the ODE:    ⇒   Cover-up method gives and    So,   We obtain by subtraction:      = \\ldots = \\frac{-3s - 10}{6(s^2 + 4s + 6)} = \\frac{Cs + D}{(s^2 + 4s + 6)} \\Rightarrow C = -\\frac{1}{2}, D = -\\frac{5}{3}.  So,   Thus, the solution of the IVP is   =  Remark: For this problem, the method of undetermined coefficients is indeed more convenient.  "
},
{
  "id": "sec-second-translation-theorem",
  "level": "1",
  "url": "sec-second-translation-theorem.html",
  "type": "Section",
  "number": "3.4",
  "title": "Second Translation Theorem",
  "body": " Second Translation Theorem  Unit step function and piecewise function  Definition. The function  is called the unit step function (Heaviside step function).  Any piecewise function can be expressed as a (possible infinite) sum of functions with unit step functions.  Suppose  Then,   We may interpret it as follows: starts with When jumps from to i.e., jumps by We then supplement  Example 1.  can be expressed as   Suppose  Then,   Interpretation:  starts from jumps from to at by then jumps from to at by  Example 2.    Conversely, given a function   represented in terms of unit step functions (assume that ), we may recover the piecewise function representation.  If we see that   If we see that   If we see that   So,   Second translation theorem  Theorem. If then  % Space for the first figure %  % Space for the second figure %  Proof:   =  =  Remarks:   The theorem is also referred to as the t-axis shift.  Here is a more convenient and less confusing form:   We use this formula to handle the Laplace transform of piecewise functions.  Example 3. Laplace transform of the unit step function.   Example 4.     Example 5.    Example 6.    Example 7.    Initial value problem with piecewise functions  Example 7.   Recall that we solved such ODE on each interval and separately using integrating factors. Laplace transform is much more convenient.  Set Also rewrite  Laplace both sides, we have     Set   Solving we obtain that   We focus on the second fraction for now. We start by     So   We obtain by subtraction.   Therefore,   Now we use the second translation theorem to handle the inverse Laplace transform:   =  =  =  We are now ready for the solution:   =  =  =  Remark: Notice that is continuous. Generally, the Laplace method yields a continuous solution of an IVP.  Example 1.    Write   Set Laplace both sides of the ODE:     We first obtain the partial fraction decomposition of   Obtain by cover-up method, by subtraction:    So   Then   The inverse form of the second translation theorem says   Set Then   The inverse form of the second translation theorem:   Therefore    % Space for the third figure %  Example 2.    Rewrite the function as   Set Laplace both sides:     We now focus on the fractions. By the cover-up method,   Set Then   The other fraction requires some work.   Cover-up method gives and We find by subtraction.    So,          % Space for the figure %  "
},
{
  "id": "sec-Laplace-periodic",
  "level": "1",
  "url": "sec-Laplace-periodic.html",
  "type": "Section",
  "number": "3.5",
  "title": "Laplace Transform of Periodic Functions",
  "body": " Laplace Transform of Periodic Functions  Recall: Let We say a function is -periodic, if for every number in the domain of and is the smallest positive number satisfying this property.  Examples.  are both -periodic because   are both -periodic, because   As a result,    We won’t say and are -periodic.  Theorem. If is a -periodic function on then   Proof. We separate the integral interval into and   We focus on the second integral. Note that for every from periodicity, then      If we set then   (note that is a dummy variable, we may replace it by  Therefore   We may proceed to solve to get   Laplace transform of the square wave function  The square wave function E(t) is a 2-periodic function that is extended from the following piecewise function:   Using the theorem, we see that:    LR-series with square wave external voltage  Example. Let be the current of an LR-series circuit whose external voltage is given by the square wave function. Assume that at , the current . We wish to know at time .  From Kirchhoff’s law, satisfies the ODE:   If we set , then    [Space for the figure]   We first use partial fractions to rewrite   To handle , we view it as the sum of a geometric series with initial term 1 and ratio , i.e.,   [Space for the figure]  "
},
{
  "id": "sec-derivative-Laplace-convolutions",
  "level": "1",
  "url": "sec-derivative-Laplace-convolutions.html",
  "type": "Section",
  "number": "3.6",
  "title": "Derivative of Laplace Transform and Convolution",
  "body": " Derivative of Laplace Transform and Convolution  Motivation: Provide some tools to solve all possible Laplace and inverse Laplace transforms.  Derivatives of  Let If we apply on both sides, we have   If is piecewise continuous and of exponential order, the differential operator commutes with the integral, resulting in    In other words,   With a similar argument, we see that for every integer   With this formula, we may handle the Laplace transform of a polynomial multiplied by any function provided we know  Example:    Example:    Say then its first derivative is   Its second derivative is    So     (No matter what method you use, the product of polynomial, exponential and trig functions will always be annoying).  Inverse Laplace of repeated quadratic factors  The derivative formula also helps us to perform inverse Laplace transform of a particular kind of partial fractions with irreducible quadratic factor.  Recall that   The derivative formula implies that   Therefore,   Convolution product  For the inverse Laplace of the most general type of partial fractions with repeated quadratic factor, we need to use the convolution product.  Let be piecewise continuous on and of exp. order. The convolution is a function defined by   Theorem.  Inverse form:  The proof is a simple exercise of multivariable calculus (via manipulation of regions of a double integral). (skip here).  Inverse Laplace of repeated quadratic factors  Using the inverse form, we compute that        To compute the integral of a product of two sine functions, we need some trigonometric identities.  Recall. Sine and Cosine of sums and differences.      By adding and subtracting these identities, we obtain     So,        So we conclude that     In general,   (convolution with itself for times).   (convolution of one copy of and copies of  Integro-differential equation  Another application of the convolution product is the Laplace transform of an integral. Recall that the theorem states that   If we take then   The theorem then says that   This formula allows us to use the Laplace method to solve integro-differential equations that arise in science and engineering.  Example: LRC-series circuit.  In Midterm 2, we saw that the electron charge of the capacitor in an LRC-series circuit satisfies a second-order linear ODE. Experimentally, it is difficult to measure the charge of a capacitor. It is easier to measure the current instead.  Let be the current at time Suppose at time zero, the capacitor is uncharged. Then satisfies the following ODE:   We set and Laplace both sides:   If and is the unit square wave function, then      "
},
{
  "id": "sec-Dirac-delta",
  "level": "1",
  "url": "sec-Dirac-delta.html",
  "type": "Section",
  "number": "3.7",
  "title": "Dirac Delta Function",
  "body": " Dirac Delta Function  The topic is one of the most confusing topics in undergraduate level STEM courses. The full justification requires the theory of distributions.  We start by the unit impulse function. For fixed and , the function   is called the unit impulse function centered at with width  Key property:   For fixed and , the function   is called the unit impulse function centered at with width  Key property:   The Dirac -function is defined as the \"limit\" of the unit impulse function:   Intuitively,    Trouble: there does not exist a function in the usual sense satisfying both properties above.  Indeed, the -function makes sense ONLY as a distribution (aka, generalized function).  The key property of the Dirac -function that matters in both pure and applied mathematics is   In other words, the integration sifts  In all applications of the Dirac -function, this is the only property that matters. We should not worry about the values of the function at a number. We should stick to this property only.  In particular, we know the Laplace transform of  . Dirac -function – history and applications   The idea of the Dirac -function is essentially in Fourier’s work of partial differential equations in mid-1800’s.  The function is formally introduced by Paul Dirac in 1927, when he used the function to study various spectral problems.  The function is rigorized by Laurent Schwartz in 1945 by inventing the theory of distributions (almost 20 years later).   Applications   Describe the “fundamental solution” of a PDE.  Describe the “derivative” of a function with jump discontinuity, e.g.,  Unifying the discrete and continuous models in probability theory.    Physicists and engineers tend to use the Dirac -function without worrying about the theory of distributions, because the effect of the \\delta-function can be easily observed from experiments , e.g., on an oscilloscope connected to a differential circuit with square wave external voltage.  In the teaching of quantum mechanics, for a very long time, the standard response to conceptual problems is SUAC, abbreviation of Shut up and Calculate.  In applying the -function in engineering practices, you may use the same philosophy. We shall see that in the next two examples.   Dirac -function – examples  Example.  We solve the ODE using the Laplace method. Set       Example.  We solve the ODE using the Laplace method. Set      Generally, the Dirac -function effectively introduces an abrupt change of the solution at (that can be observed from experiments).  "
},
{
  "id": "sec-linear-algebra",
  "level": "1",
  "url": "sec-linear-algebra.html",
  "type": "Section",
  "number": "4.1",
  "title": "A crash course of linear algebra",
  "body": " A crash course of linear algebra  A Crash Course of Linear Algebra  For Students in Differential Equations in Science and Engineering  1. Matrix Multiplication  (1) Multiplying row vectors and column vectors   It's just like the dot product of two vectors.  (2) Multiplying matrices and column vectors   Regard the matrix as three row vectors, perform three row-column multiplications and put the results respectively in the corresponding rows.  (3) Multiplying matrices and matrices    Regard the matrix on the right as three column vectors, perform three matrix-column multiplications and put the results respectively in the corresponding columns.  2. Using Matrices to Solve System of Linear Equations  The system of linear equations   can be regarded as an equation of column vectors   To solve it, we form the extended matrix   Perform row transformations to punch holes in the lower triangular part   Several cases might occur:  (1) All the diagonal terms are nonzero. In this case, the system has a unique solution.  Example.   The extended matrix   We first punch two holes in the first column: add the first row to the second row, and add times the first row to the last row:   Then punch one hole in the second column: add 3 times the second row to the last row.   Now all the diagonal terms are nonzero and we can start to solve it:  Last row says   Second row says   First row says   So we have a unique solution   Remark. This case happens if and only if the matrix is nonsingular, i.e., the determinant of the coefficient matrix is nonzero. In fact, if you did not switch rows or multiply any row by any number, then the determinant is precisely the product of all diagonal entries. Therefore it is nonzero if and only if all the factors are nonzero.  (2) The last term in the diagonal is zero, as well as the right-hand side, and the rest diagonal terms is nonzero. In this case, the system has infinitely many solutions parametrized by one free variable.  Example.   The extended matrix   We first punch two holes in the first column: add times the first row to the second row, and add times the first row to the last row:   Then punch one hole in the second column: add times the second row to the last row.   Last row reads   That means it’s redundant and we now have two equations with three variables.  Second row says   First row says   Let as the free variable, then we have infinitely many solutions:   that is parameterized by  (3) The left-hand side of the last row is zero, but the right-hand side of the last row is nonzero. In this case, the system has no solution.  Example.   The extended matrix   We first punch two holes in the first column: add times the first row to the second row, and add times the first row to the last row:   Then punch one hole in the second column: subtract the last row by the second row.   Last row reads   that can never be satisfied. Therefore the system has no solution.  (4) The second and the third row are all zero. In this case, the system has infinitely many solutions parametrized by two free variables.  Example.   The extended matrix   We first punch two holes in the first column: add times the first row to the second row, and add times the first row to the last row:   And now both the second row and third row read   We are left with one equation with three variables. So two of them are free. Let’s set and  The first equation reads   Then we have infinitely many solutions:   that is parameterized by two free variables and  (5) Other cases. You will learn about them systematically in a course of linear algebra. For this class, you don’t need to worry about more than the above.  Remark. For all cases other than (1), the determinant of the coefficient matrix is zero.  Remark. In general you don’t need to be that mechanical in doing this. As long as there are enough zeros in the extended matrix, you can start to read it in terms of variables. Examples will be seen below.  Remark. For homogeneous equations (meaning that ), we don’t need to worry about the third case.  3. Linearly Independent Vectors and Linearly Dependent Vectors  (1) Three vectors are called linearly dependent if for some and that are NOT ALL ZERO, such that   In this case, one can express one of them by the linear combination of the other two.  Example.   One can verify that   Therefore   So \"depends\" on and This is one reason for this terminology.  (2) If you cannot find such and , then we say are linearly independent. Equivalently, all and satisfying   must be ALL ZERO:  (3) Write   The left-hand side of the equation   can then be written as   Therefore the equation is simply   In other words, all we need to deal with is simply a homogeneous system of linear equations.  Like what we did in the previous section, we use row transformations to punch holes in the lower triangular part:    If all diagonal entries are nonzero (equivalently, if the determinant of the matrix is nonzero), then we have linear independence.  CAUTION! This only works when the matrix dimension is equal to the number of vectors. If say you have 4 vectors of dimension 3, then they are automatically linear dependent!  Otherwise, we have linear dependence and solving the linear system should give a relation.   Example 1: Determine if the following vectors are linear independent.   Put into a matrix and compute its determinant:   So they are linearly independent.  If we look at the linear system   Switching and (note: switching two rows will change the sign of the determinant):   Subtract the third row by the first:   Subtract the third row by the second:   One can see that all the diagonal entries are nonzero.  Example 2: Find a relation between the following vectors.   Put into a matrix and form the linear system above:   To solve it, we form the extended matrix:   To punch holes on the lower triangular part, we first subtract the second row by the first row:   Then subtract the third row by the second:   (It seems that you have nonzero diagonal entries, but the additional column makes it possible to find nonzero solutions!)  The last row reads   The second row reads   The first row reads   Set and we have So a linear relation is obtained, as   4. Eigenvalues and Eigenvectors  (1) Let be a matrix and let be a NONZERO vector. If the matrix-vector product is a multiple of i.e.,   Then the multiple is called an eigenvalue of and is called an eigenvector of corresponding to the eigenvalue  (2) The condition is equivalent to the following system of linear equations   To see more clearly, write   Then the condition can be expressed as   To have a nonzero solution to such a linear system, the determinant of the matrix must be zero. Therefore the eigenvalues of the matrix satisfy the polynomial equation   Or in terms of matrices   Once the roots of the above polynomial are found, put them into the above linear system and solve it, you will get the eigenvectors.  (3) In summary, to find the eigenvalues and eigenvectors for a given matrix   Find the eigenvalues by solving the polynomial equation  Solve the linear system specified above for EACH eigenvalue to get the corresponding eigenvector.   Example 1. Find the eigenvalues and corresponding eigenvectors for the matrix   Step 1: Find the eigenvalues:   Solving the quadratic equation, one gets the eigenvalues   Step 2: Find an eigenvector for each of the eigenvalues:  For solve the linear system   Punch a hole on the lower-left corner:   (If you did not get a full zero row, that means you messed up and DON’T YOU DARE TO CONTINUE!)  So the first row reads   Set (since I hate fractions), then So  is an eigenvector corresponding to the eigenvalue  YOU ARE NOT DONE YET, there is another eigenvector to deal with!  For solve the linear system   Punch a hole on the lower-left corner:   The first row reads   Put to get and therefore  is an eigenvector corresponding to the eigenvalue  (Now we are done!)  Example 2. Find the eigenvalues and corresponding eigenvectors for the matrix   Step 1: Find the eigenvalues:   Solving the equation, one gets the eigenvalue   Step 2: Find an eigenvector for each of the eigenvalues:  For solve the linear system   (As long as there are enough holes in the matrix, you don’t have to punch more)  The second row reads   The third row reads   Set then and So  is an eigenvector corresponding to the eigenvalue  For solve the linear system   The first row reads   The second equation reads   The third equation reads   (It seems that you have nonzero diagonal entries, but the additional column makes it possible to find nonzero solutions!)  The last row reads   So it should be redundant (otherwise you messed up!). Put to get and therefore  is an eigenvector corresponding to the eigenvalue  For the eigenvector can actually be obtained by taking the conjugate of the eigenvector to namely, we should have  is an eigenvector corresponding to the eigenvalue  Please do the computations to verify this.  Remark. The technique of computing eigenvectors and eigenvalues is crucial for solving linear systems of ODE with constant coefficients, as you will see in 7.5, 7.6, and 7.8.  Remark. Actually, the above example tells the secret that, when dealing with complex eigenvalues, it suffices to look at only one of them. You will experience the same again in 7.6.  "
},
{
  "id": "sec-system-linear-ODEs",
  "level": "1",
  "url": "sec-system-linear-ODEs.html",
  "type": "Section",
  "number": "4.2",
  "title": "System of First-Order Linear ODEs",
  "body": " System of First-Order Linear ODEs  1. General theory systems of first order linear ODEs   In -variable case   Existence and Uniqueness Theorem: If and are continuous over an interval that contains , then there exists a unique solution to the initial value problem   over the interval  Remark: We’ll only focus on the homogeneous system, i.e., the case when all  Principle of Superposition: Vector functions are linearly independent solutions to the system then the general solution to the linear homogeneous system is   Linearly independent means the Wronskian of the vector functions are not constantly zero.  Relations to the first order ODE  2. System of Linear ODEs with Constant coefficients:   Idea: Try to find some solutions. Then use the principle of superposition to solve the problem.  To get the general solution to the linear system of ODE defined by   The initial steps are always the same: Find the eigenvalues by solving the polynomial equation   Then find the eigenvectors by solving the linear system   for each eigenvalue  For systems, this equation is quadratic. This means it might have three different kinds of roots and we have to deal with each case separately.  1. Real distinct eigenvalues. In this case one can always find two linearly independent eigenvectors.  Let be the eigenvalues and are the eigenvectors corresponding respectively to Then the general solution is   2. Complex eigenvalues. In this case we need to look at only one eigenvector.  Let be the eigenvalues of the matrix. Let be the eigenvector corresponding to Perform the following steps:   Write the complex solution into the following form   You’ll need to use Euler’s equation and perform a complex multiplication.  Then the general solution is    3. Repeated eigenvalues. There are two sub-cases. Let be the eigenvalue in question   (1) There exists two linearly independent eigenvectors , both corresponding to In this case the general solution is simply   (2) Only one eigenvector can be found and all other eigenvectors are proportion to it.  To find the general solution:   Find the \"generalized eigenvector\" by solving the following linear system   The general solution would then be   4. Examples.  (1) Real distinct eigenvalues - typical   Find the eigenvalues:   Solve the equation   Solve the eigenvector for :   Solve the eigenvector for :   So the general solution is   (2) Real distinct eigenvalues - ugly   Find the eigenvalues:   Solve the equation   Solve the eigenvector for :   So it should be redundant (otherwise you messed up!). Put to get and therefore  is an eigenvector corresponding to the eigenvalue  Solve the eigenvector for   So the general solution is   Remark: Certainly things can be made uglier.  (3) Complex eigenvalues - typical   Find the eigenvalues:   Solve the equation   Solve the eigenvector for   Formulate the complex solution and find its real and imaginary part.   Product rule of exponential   You’ll need to use Euler’s equation and perform a complex multiplication.  Then the general solution is   Remark. The above eigenvector was obtained by looking at the first equation. If instead you look at the second row, you may get a different eigenvector which will lead to the following general solution   Although they look so different, but indeed they are the same when the initial values are specified.  Indeed, if we impose that then both general solutions yield the same solution   The only difference would be in the choice of parameters.  (4) Complex eigenvalues - ugly   Find the eigenvalues:   Solve the equation   Solve the eigenvector for   Formulate the complex solution and find its real and imaginary part.   Product rule of exponential   You’ll need to use Euler’s equation and perform a complex multiplication.  Then the general solution is   (5) Repeated eigenvalues Case 1   Find the eigenvalues:   Solve the equation   Solve the eigenvector for   This ridiculous linear system simply means we have zero equations for two variables, i.e., both variables involved are free.  Setting free variable ( ) as and , we obtain two linearly independent eigenvectors and   And the general solution is   Remark: For matrix, this is a considerably rare case and only happens when you have a scalar matrix, i.e., a scalar multiple of the identity matrix. But for matrices of higher dimension this is more common.  (6) Repeated eigenvalues Case 2   Find the eigenvalues:   Solve the equation   Solve the eigenvector   Solve for the generalized eigenvector   So the general solution is   (7) 3 x 3 system: mixture of real and complex eigenvalues   Find the eigenvalues:   Solve the equation   Solve the eigenvector for   Solve the eigenvector for   Find the real part and the imaginary part of   Product rule \\amp Euler   Multiply   Separate   So the general solution is   (8) 3 x 3 system: mixture of repeated (case 1) and single eigenvalues   Find the eigenvalues:   Solve the equation   Solve the eigenvector for   So the general solution is   Solve the eigenvector for   One equation for three variables, thus two variables are free and can be set to solve   Solve the eigenvector for   So the general solution to the ODE is   "
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
