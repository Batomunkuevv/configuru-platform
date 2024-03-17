import './project.scss';
import 'swiper/css';
import { useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { projectsData } from '../../data/projects-data';

import { Project3D } from '../../components/project-3d/project-3d';

export const ProjectPage = () => {
    const { projectsCategory, projectSlug } = useParams();
    const [_, setInitProjectImages] = useState(null);
    const prevArrowRef = useRef(null);
    const nextArrowRef = useRef(null);
    const currentProjectsCategory = projectsData.find(data => data.category === projectsCategory);
    const project = currentProjectsCategory?.projects.find(project => project.slug === projectSlug);

    return (
        <>
            {project ? (
                <article className='project'>
                    <div className="container">
                        <div className="project__header">
                            <h1 className="project__title">{project.name}</h1>
                            <Link to={`/projects/${currentProjectsCategory.category}`} className="project__button project__button--desktop button button--border">
                                <span className="button__icon">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8334 10.8382H4.16669M4.16669 10.8382L10 16.6715M4.16669 10.8382L10 5.00488" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="button__text">
                                    Back to projects
                                </span>
                            </Link>
                        </div>
                        {projectsCategory === '3d-tour' ? (
                            <Project3D id={project.id} />
                        ) : (
                            <div className="project__images">
                                <Swiper
                                    className='project__images-slider'
                                    modules={[Navigation]}
                                    navigation={{
                                        prevEl: prevArrowRef.current,
                                        nextEl: nextArrowRef.current,
                                    }}
                                    loop={true}
                                    spaceBetween={32}
                                    speed={1000}
                                    grabCursor={true}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                    onInit={() => setInitProjectImages(true)}
                                >
                                    {project.images.map((image, i) => (
                                        <SwiperSlide key={i} className="project__images-item">
                                            <img width="400" height="400" src={image} alt={project.name} title={project.name} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="project__images-arrows">
                                    <button type='button' ref={prevArrowRef} className="project__images-arrow project__images-arrow--prev arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button type='button' ref={nextArrowRef} className="project__images-arrow project__images-arrow--next arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                        <Link to={`/projects/${currentProjectsCategory.category}`} className="project__button project__button--mobile button button--border">
                            <span className="button__icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8334 10.8382H4.16669M4.16669 10.8382L10 16.6715M4.16669 10.8382L10 5.00488" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="button__text">
                                Back to projects
                            </span>
                        </Link>
                    </div>
                </article >
            ) : <Navigate to='/404' />}
        </>
    );
}