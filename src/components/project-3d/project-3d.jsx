import { useEffect, useRef, useState } from "react";
import { Application, ArcwareInit } from "@arcware-cloud/pixelstreaming-websdk";

export const Project3D = ({ id }) => {
    const project3dRef = useRef(null);

    useEffect(() => {
        const { Application } = ArcwareInit(
            {
                shareId: id
            },
            {
                initialSettings: {
                    StartVideoMuted: true,
                    AutoConnect: true,
                    AutoPlayVideo: true
                },
                settings: {
                    audioButton: true,
                    fullscreenButton: true,
                },
            }
        );

        if (project3dRef?.current) {
            project3dRef.current.appendChild(Application.rootElement);
        }
    }, [project3dRef, id])

    return <div ref={project3dRef} className="project__3d"></div>
}