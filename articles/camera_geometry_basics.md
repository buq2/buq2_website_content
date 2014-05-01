{
    "Title": "Camera geometry basics",
    "LongTitle": "Basics for 3D camera geometry",
    "Description": "Article explains homogenous coordinates, lines, and few important linear algebra methods",
    "DateCreated": "2014-04-29 21:08",
    "DateModified": "2014-04-29 21:08",
    "Icon": "/content_static/articles/camera_geometry_basics/icon.png",
    "Tags": ["camera geometry", "3d", "basic"],
    "CreateToc": true
}

---------- META END ----------

This article tries to list minimum amount of math which is required for
some of the other articles.

# Symbols used by this site

- Scalars are in _italics_
    - $x$ and $y_0$ are scalars
- Vectors are *bolded*
    - $\mathbf{x}$ and $\mathbf{\hat{x}}$ are vectors
- Matrices are usually upper case letters without italics or bolding
    - $\mathrm{P}$ and $\mathrm{H}$ are matrices

Common symbols

- $\mathrm{P}$ is $3\times4$ projection matrix
    - $\mathrm{P} = \mathrm{K}[\mathrm{R -R}\mathbf{C}]$
- $\mathrm{K}$ is $3\times3$ camera calibration matrix
- $\mathrm{R}$ is $3\times3$ rotation matrix
- $\mathbf{C}$ is $3\times1$ vector presenting camera center
- $\mathbf{T}$ is $3\times1$ vector presenting camera translation
    - $\mathbf{T} = -\mathrm{R}\mathbf{C}$
- $\textbf{x}$ is $3\times1$ homogenous 2D point
- $\textbf{l}$ is $3\times1$ homogenous 2D line
- $\textbf{X}$ is $4\times1$ homogenous 3D point
- $\mathrm{H}$ is $3\times3$ homography/transformation matrix
- $\omega$ is scalar presenting the "scale" of homogenous coordinate

# Vector dot product

Vector dot product is defined for all vectors regardless of the dimension.
For two same size vectors, $\mathbf{a} = [a_1, a_2, …, a_n]$ and
$\mathbf{b} = [b_1, b_2, …, b_n]$, dot product is defined as
$\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^n a_ib_i$.

Dot product has also geometric interpretation: if the two vectors are
interpreted to exist in euclidean space the dot product then relates to
cosine of the angle between the two vectors. More specifically
$\mathbf{a} \cdot \mathbf{b} = \|\mathbf A\|\,\|\mathbf B\|\cos\theta$ where $\theta$
is the angle between the vectors.

This geometric interpretation can be useful for example when similarity
between two vectors is compared, if the two vectors point to
same direction, angle between the vectors is small and therefore
$\cos\theta$ is large. If the angle between the vectors is large
$\cos\theta$ is small (or zero if the vectors are prependicular).
 
([^wiki-dotproduct])

# Vector cross product

Vector cross product is defined for two 3-vectors and it produces new
vector which is perpendicular to both of the vectors.
As now the angle of the new vector is 90° to both original vectors, this
means that dot product between the new and old vectors is zero.

Cross product between two 3-vectors,  $\mathbf{v} = [v_1, v_2, v_3]$
and $\mathbf{u} = [u_1, u_2, u_3]$, is defined as:
$$
\mathbf{u} \times \mathbf{v} =
\begin{bmatrix}
    u_2v_3 - u_3v_2 \\
    u_3v_1 - u_1v_3 \\
    u_1v_2 - u_2v_1 \\
\end{bmatrix}^T
$$
Note that this can also be presented in matrix form:
$$
\mathbf{v} \times \mathbf{u} = 
 [ \mathbf{v} ]_\times \mathbf{u} = 
\begin{bmatrix}
        0 & -v_3& v_2 \\
        v_3 & 0 & -v_1 \\
        -v_2 & v_1 & 0
\end{bmatrix}
\mathbf{u}
$$

<!--
It is useful to note that the new vector produced by cross product has
lentgh that is proportional to area spanned by the two original vectors
$\mathbf{v}$ and $\mathbf{u}$.
-->

([^wiki-crossproduct], [^hz2-crossproduct])

# Homogenous coordinates

Homogenous coordinates are system of coordinates which is commonly used
for projective geometry instead of Cartasian coordinates. Instead of using
two scalars to present 2D point in homogenous coordinates 2D point is
presented using 3 scalars. For example 2D point $\mathbf{x}$ which is
in Cartesian coordinates presented as $(x,y)$ is presented in homogenous
coordinates as:
$$
\mathbf{x} =
\begin{bmatrix}
    \omega x \\
    \omega y \\
    \omega
\end{bmatrix}
=
\omega
\begin{bmatrix}
    x \\
    y \\
    1
\end{bmatrix}
$$

Homogenous coordinates are used to present both 2D and 3D points.
3D points are just 4-vectors: $\mathbf{X} = \omega [x,y,z,1]^T$

## Why should we use homogenous coordinates?

Homogenous coordinates make it easier to handle projective geometry.

For example lets try to translate non-homogenous 2D point
$\mathbf{x_{2d}} = [x,y]^T$ two units to the positive x-direction using
matrix multiplication with matrix
$$
\mathrm{H_{2d}} =
\begin{bmatrix}
    h_{1,1} & h_{1,2} \\
    h_{2,1} & h_{2,2}
\end{bmatrix}
$$
$$
\mathbf{x_{translated}} = \mathrm{H_{2d}}\mathbf{x_{2d}} =
\begin{bmatrix}
    h_{1,1} & h_{1,2} \\
    h_{2,1} & h_{2,2}
\end{bmatrix}
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
=
\begin{bmatrix}
    h_{1,1}x+h_{1,2}y \\
    h_{2,1}x+h_{2,2}y \\
\end{bmatrix}
$$
As all elements of $\mathbf{x_{translated}}$ depend on $\mathrm{H_{2d}}$
it is easy to see that 2D translation can not be done with $2\times2$ matrix
multiplication.

But if we use homogenous coordinates and $3\times3$ transformation matrix
we can define translation as:
$$
\mathrm{H}\mathbf{x} =
\begin{bmatrix}
    1 & 0 & \delta x \\
    0 & 1 & \delta y \\
    0 & 0 & 1 \\
\end{bmatrix}
\omega
\begin{bmatrix}
    x \\
    y \\
    1 \\
\end{bmatrix}
=
\omega
\begin{bmatrix}
    x + \delta x \\
    y + \delta y \\
    1 \\
\end{bmatrix}
$$


If after transformation we get homogenous coordinate for which the $\omega$
is not $1$, we can simply divide the result with $\omega$ and get
more easily read presentation of the point/line.

([^hz2-pointsandlines], [^wiki-homogenouscoordinates])

# 2D Line

Useful way to define a line is: $\mathbf{l} = [a, b, c]^T$, point $\mathbf{x}$
is on the line if $\mathbf{x} \cdot \mathbf{l} = 0$ or $ax + by + c = 0$.

If we need to find line $\mathbf{l}$ which travels trough two 2D points,
$\mathbf{x_1}$ and $\mathbf{x_2}$, it can be found easily by taking
cross product of the two points: $\mathbf{l} = \mathbf{x_1} \times \mathbf{x_2}$.
Result can be easily verified if we rember the properties of the cross product
and dot product:

- Cross product results in a vector which is perpendicular to both original vectors.
- Dot product results is scalar which is directly proportional to the cosine of the angle between the two vectors.
    - If the two orignal vectors are perpendicular the result is 0.

Same way it easy to find point $\mathbf{x}$ in which two lines,
$\mathbf{l_1}$ and  $\mathbf{l_2}$ cross each other:
$\mathbf{x} = \mathbf{l_1} \times \mathbf{l_2}$.

([^hz2-pointsandlines])

# Links

[^wiki-dotproduct]: [Wikipedia: Dot product](http://en.wikipedia.org/wiki/Dot_product)
[^wiki-crossproduct]: [Wikipedia: Cross product](http://en.wikipedia.org/wiki/Cross_product)
[^hz2-crossproduct]: Hartley, Zisserman - Multiple view geometry, 2004. A4.3, p.581. Cross products
[^hz2-pointsandlines]: Hartley, Zisserman - Multiple view geometry, 2004. A2.2.1, p.26. Points and lines
[^wiki-homogenouscoordinates]: [Wikipedia: Homogenous coordinates](http://en.wikipedia.org/wiki/Homogeneous_coordinates)
