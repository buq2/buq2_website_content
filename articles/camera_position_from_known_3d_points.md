{
    "Title": "Camera position estimation",
    "LongTitle": "Camera position estimation from known 3D points",
    "Description": "How to find (noncalibrated) camera position, orientation and camera matrix from 6+ known 3D points",
    "DateCreated": "2014-04-22 19:57",
    "DateModified": "2014-04-29 20:53",
    "Icon": "/content_static/articles/camera_position_from_known_3d_points/icon.png",
    "Tags": ["camera geometry", "3d"]
}

---------- META END ----------

This article describes how to find camera matrix, including calibration matrix, from 6 or more known 3D points which have been projected to the camera sensor. Good reference for the article is in [^hza71].

# Problem description

We know at least six 3D points in the scene ($X, Y$ and $Z$ coordinates) and their location at the camera sensor in pixel coordinates. We would like to find the location and orientation of the camera.

# Basics

If your object has 6 known points (known 3D coordinates, $X, Y$ and $Z$) you can compute the location of the camera related to the objects coordinate system.

First some basics. 

Homogenous coordinate is vector presentation of euclidean coordinate $(X,Y,Z)$ in which we have appended so called scale factor $\omega$ such that the homogenous coordinate is $\textbf{X} = \omega \begin{bmatrix}X & Y & Z & 1\end{bmatrix}^T$. In your own calculations try to keep $\omega=1$ as often as possible (meaning that you "normalize" the homogenous coordinate by dividing it with its last element: $\textbf{X} \leftarrow \frac{\textbf{X}}{\omega}$). We can also use homogenous presentation for 2D points such that $\textbf{x} = \omega\begin{bmatrix}X & Y & 1\end{bmatrix}$ (remeber that these $\omega, X,Y$ and $Z$ are different for each point, be it 2D or 3D point). Homogenous coordinate presentation makes the math easier.

Camera matrix is $3\times4$ projection matrix from the 3D world to the image sensor:

$$
\textbf{x} = P\textbf{X}
$$

Where $\textbf{x}$ is the point on image sensor (with pixels units) and $\textbf{X}$ is the projected 3D point (lets say that it has millimeters as its units).

We remember that cross product between two 3-vectors can be defined as matrix-vector-multiplication such that:

$$
\textbf{v} \times \textbf{u} = \\
 ( \textbf{v} )_x \textbf{u} = \\
\begin{bmatrix}
        0 & -v_3& v_2 \\
        v_3 & 0 & -v_1 \\
        -v_2 & v_1 & 0
\end{bmatrix}
\textbf{u}
$$

It is also useful to note that cross production $\textbf{v} \times \textbf{v} = \textbf{0}$.

Now lets try to solve the projection matrix $P$ from the previous equations. Lets multiply the projection equation from the left side with $\textbf{x}$s cross product matrix:

$$
(\textbf{x})_x\textbf{x} = (\textbf{x})_xP\textbf{X} = \textbf{0}
$$

Aha! The result must be zero vector. If we now open the equation we get:

$$
    \begin{bmatrix}
        0 & -w& y \\
        w & 0 & -x \\
        -y & x & 0
    \end{bmatrix}
    \begin{bmatrix}
            P_{1,1} & P_{1,2} & P_{1,3} & P_{1,4} \\
            P_{2,1} & P_{2,2} & P_{2,3} & P_{2,4} \\
            P_{3,1} & P_{3,2} & P_{3,3} & P_{3,4}
    \end{bmatrix}
    \textbf{X}
\\
=

\begin{bmatrix}
 P_{3,4} W y - P_{2,1} X w - P_{2,2} Y w - P_{2,4} W w + P_{3,1} X y - P_{2,3} Z w + P_{3,2} Y y + P_{3,3} Z y \\
 P_{1,4} W w + P_{1,1} X w - P_{3,4} W x + P_{1,2} Y w - P_{3,1} X x + P_{1,3} Z w - P_{3,2} Y x - P_{3,3} Z x \\
 P_{2,4} W x + P_{2,1} X x - P_{1,4} W y - P_{1,1} X y + P_{2,2} Y x - P_{1,2} Y y + P_{2,3} Z x - P_{1,3} Z y
\end{bmatrix} = \textbf{0}
$$

With little bit of refactoring we can get the projection matrix $P$ outside of the matrix:

$$
\tiny
\begin{bmatrix} 0 & 0 & 0 & 0 & - X\, w & - Y\, w & - Z\, w & - W\, w & X\, y & Y\, y & Z\, y & W\, y\\ X\, w & Y\, w & Z\, w & W\, w & 0 & 0 & 0 & 0 & - X\, x & - Y\, x & - Z\, x & - W\, x\\ - X\, y & - Y\, y & - Z\, y & - W\, y & X\, x & Y\, x & Z\, x & W\, x & 0 & 0 & 0 & 0 \end{bmatrix}
\begin{bmatrix}
    \textbf{P}_1 \\
    \textbf{P}_2 \\
    \textbf{P}_3 \\
\end{bmatrix}
= 
\textbf{0}
$$

Where $\textbf{P}_n$ is the transpose of $n$:th row of the camera matrix $P$. Last row of the previous (big) matrix equation is linear combination of the first two rows, so it does not bring any additional information and it can be left out.

Small pause so we can gather our toughs. Note that the previous matrix equation has to be formed for each known 3D->2D correspondence (there must be at least 6 of them).

Now, for each point correspondence, calculate the first two rows of the matrix above, stack the $2\times12$ matrices on top of each other and you get new matrix $A$ for which

$$
A\begin{bmatrix}
    \textbf{P}_1 \\
    \textbf{P}_2 \\
    \textbf{P}_3 \\
\end{bmatrix}
= 
\textbf{0}
$$

As we have 12 unknowns and (at least) 12 equations this can be solved. Only problem is that we don't want to have the trivial answer where 
$$
\begin{bmatrix}
    \textbf{P}_1 \\
    \textbf{P}_2 \\
    \textbf{P}_3 \\
\end{bmatrix} = \textbf{0}
$$

Fortunately we can use singular value decomposition (SVD) to force 

$$
\|
\begin{bmatrix}
    \textbf{P}_1 \\
    \textbf{P}_2 \\
    \textbf{P}_3 \\
\end{bmatrix}
\|=1
$$

So to solve the the equations, calculate SVD of matrix $A$ and pick the singular vector corresponding to the smallest eigen value. This vector is the null vector of matrix A and also the solution for the camera matrix $P$. Just unstack the $\begin{bmatrix} \textbf{P}_1 & \textbf{P}_2 & \textbf{P}_3 \end{bmatrix}^T$ and form $P$.

Now you wanted to know the distance to the object. $P$ is defined as:

$$
P = K\begin{bmatrix}R & -R\textbf{C}\end{bmatrix}
$$

where $\textbf{C}$ is the camera location relative to the objects origin. It can be solved from the $P$ by calculating $P$s null vector.

(Hartley, Zisserman - Multiple View Geometry in Computer Vision)

Finally, when you calculate the cameras location for two frames, you can calculate the unknown objects locations (or locations of some of the points of the object) by solving two equations for $X$:

$$
\textbf{x}_1 = P_1 \textbf{X} \\
\textbf{x}_2 = P_2 \textbf{X} \\
$$

Which goes pretty much the same way as how we solved the camera matrices:
$$
(\textbf{x}_1)_xP_1\textbf{X} = \textbf{0} \\
(\textbf{x}_2)_xP_2\textbf{X} = \textbf{0} \\
$$

And so on.


[^hza71]: Harley, Zisserman - Multiple View Geometry 2004. Algorithm 7.1
