{
    "Title": "Image formation",
    "LongTitle": "How image is formed",
    "Description": "Explanation how image is formed",
    "DateCreated": "2014-08-25 19:02",
    "DateModified": "2014-08-25 19:02",
    "Icon": "/content_static/articles/default/icon.png",
    "Tags": ["camera geometry", "image formation", "basic"],
    "CreateToc": true
}

---------- META END ----------

There exists different mathematical models for image formation, but for generic 3D measurement the most used one is the pinhole camera model. Pinhole camera model is often applied in machine vision applications because it is simple and accurate for camera systems with narrow angle of view. In the simplest pinhole camera model 3D points are directly projected to the plane of camera sensor after which optical distortion effect is applied to them. Even high quality optics has a non-ideal optical transfer function (OTF) which causes a single point to spread to a wider area on the camera sensor. 

# Pinhole camera model

In pinhole camera model 3D points $\textbf{X}$ are projected trough single point in space (camera center $\mathbf{C}$ / focal point) to the camera sensor.

![Image formation path](/content_static/articles/image_formation/image_formation_steps.png)


## Optical transfer function
### Point spread function



[^wiki-pinhole-model]: [Wikipedia: Pinhole camera model](http://en.wikipedia.org/wiki/Pinhole_camera_model)
[^wiki-psf]: [Wikipedia: Point spread function](http://en.wikipedia.org/wiki/Point_spread_function)
[^wiki-otf]: [Wikipedia: Optical transfer function](http://en.wikipedia.org/wiki/Optical_transfer_function)
