import previewAiRenders from '../assets/images/projects/ai-renders-preview.jpg';
import previewAiRenovations from '../assets/images/projects/ai-renovatons-preview.jpg';
import preview3dTour from '../assets/images/projects/3d-tour-preview.jpg';

import trioWerde01 from '../assets/images/projects/ai-renders/trio-verder-01.jpg';
import trioWerde02 from '../assets/images/projects/ai-renders/trio-verder-01.jpg';

import we01 from '../assets/images/projects/ai-renders/we-01-01.jpg';
import we02 from '../assets/images/projects/ai-renders/we-01-01.jpg';

import zimmer01 from '../assets/images/projects/ai-renovations/ausbauwohnung-4-zimmer-01.jpg';
import zimmer02 from '../assets/images/projects/ai-renovations/ausbauwohnung-4-zimmer-02.jpg';

import bochum01 from '../assets/images/projects/ai-renovations/weststraße-165-44866-bochum-01.jpg';
import bochum02 from '../assets/images/projects/ai-renovations/weststraße-165-44866-bochum-02.jpg';

import adley01 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-01.jpg';
import adley02 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-02.jpg';
import adley03 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-03.jpg';
import adley04 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-04.jpg';

export const projectsData = [
    {
        "name": 'AI Renders',
        "category": "ai-renders",
        "preview": previewAiRenders,
        "projects": [
            {
                "name": "Trio Verde",
                "slug": "trio-verde",
                "images": [
                    trioWerde01,
                    trioWerde02,
                ]
            },
            {
                "name": "WE 01",
                "slug": "we-01",
                "images": [
                    we01,
                    we02,
                ]
            }
        ]
    },
    {
        "name": 'AI Renovations',
        "category": "ai-renovations",
        "preview": previewAiRenovations,
        "projects": [
            {
                "name": "D&S AQ Ausbauwohnung 4 Zimmer",
                "slug": "d&s-aq-ausbauwohnung-4-zimmer",
                "images": [
                    zimmer01,
                    zimmer02,
                ]
            },
            {
                "name": "Weststraße 165 44866 Bochum",
                "slug": "weststraße-165-44866-bochum",
                "images": [
                    bochum01,
                    bochum02,
                ]
            },
            {
                "name": "186 Adley Dr (Brock / Adley)",
                "slug": "186-adley-dr-brock-adley",
                "images": [
                    adley01,
                    adley02,
                    adley03,
                    adley04
                ]
            }
        ]
    },
    {
        "name": '3D Tour',
        "category": "3d-tour",
        "preview": preview3dTour,
        "projects": [
            {
                "name": "DGER",
                "slug": "dger",
                "url": "https://share.arcware.cloud/b51fd627-d976-40de-a025-705a49258602"
            },
            {
                "name": "RAIN",
                "slug": "rain",
                "url": "https://share.arcware.cloud/10a554f4-b006-4924-8cf6-8e1fcf107390"
            },
            {
                "name": "NY262",
                "slug": "ny262",
                "url": "https://share.arcware.cloud/share-e80e7fd1-b3db-48c4-b275-65a379dc47bc"
            },
            {
                "name": "AI Apartments Demo",
                "slug": "ai-apartments-demo",
                "url": "https://share.arcware.cloud/share-e05b9063-5a00-43d1-b7e6-c97f09c31901"
            },
            {
                "name": "Trio Verde",
                "slug": "trio-verde",
                "url": "https://share.arcware.cloud/b51fd627-d976-40de-a025-705a49258602"
            }
        ]
    }
]