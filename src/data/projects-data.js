//? AI Renders

import trioWerdePreview from '../assets/images/projects/ai-renders/trio-verde-preview.png';
import trioWerde01 from '../assets/images/projects/ai-renders/trio-verde-01.jpg';
import trioWerde02 from '../assets/images/projects/ai-renders/trio-verde-02.jpg';

import we01preview from '../assets/images/projects/ai-renders/we-01-preview.jpg';
import we01 from '../assets/images/projects/ai-renders/we-01-01.jpg';
import we02 from '../assets/images/projects/ai-renders/we-01-02.jpg';
import we03 from '../assets/images/projects/ai-renders/we-01-03.jpg';

//? AI Renovations

import zimmerPreview from '../assets/images/projects/ai-renovations/zimmer-preview.png';
import zimmer01 from '../assets/images/projects/ai-renovations/ausbauwohnung-4-zimmer-01.jpg';
import zimmer02 from '../assets/images/projects/ai-renovations/ausbauwohnung-4-zimmer-02.jpg';

import bochumPreview from '../assets/images/projects/ai-renovations/bochum-preview.png';
import bochum01 from '../assets/images/projects/ai-renovations/weststraße-165-44866-bochum-01.jpg';
import bochum02 from '../assets/images/projects/ai-renovations/weststraße-165-44866-bochum-02.jpg';

import adleyPreview from '../assets/images/projects/ai-renovations/186-adley-dr-preview.jpeg';
import adley01 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-01.jpg';
import adley02 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-02.jpg';
import adley03 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-03.jpg';
import adley04 from '../assets/images/projects/ai-renovations/186-adley-dr-brock-adley-04.jpg';

//? 3D tour

import dgerPreview from '../assets/images/projects/3d-tour/dger.png';
import rainPreview from '../assets/images/projects/3d-tour/rain.jpg';
import ny262Preview from '../assets/images/projects/3d-tour/ny262.png';
import aiDemoPreview from '../assets/images/projects/3d-tour/ai-demo.png';
import trioVerde3dPreview from '../assets/images/projects/3d-tour/trio-verde.jpeg';

export const projectsData = [
    {
        "name": 'AI Renders',
        "category": "ai-renders",
        "projects": [
            {
                "name": "Trio Verde",
                "slug": "trio-verde",
                "preview": trioWerdePreview,
                "images": [
                    trioWerde01,
                    trioWerde02
                ]
            },
            {
                "name": "WE 01",
                "slug": "we-01",
                "preview": we01preview,
                "images": [
                    we01,
                    we02,
                    we03
                ]
            }
        ]
    },
    {
        "name": 'AI Renovations',
        "category": "ai-renovations",
        "projects": [
            {
                "name": "D&S AQ Ausbauwohnung 4 Zimmer",
                "slug": "d&s-aq-ausbauwohnung-4-zimmer",
                "preview": zimmerPreview,
                "images": [
                    zimmer01,
                    zimmer02,
                ]
            },
            {
                "name": "Weststraße 165 44866 Bochum",
                "slug": "weststraße-165-44866-bochum",
                "preview": bochumPreview,
                "images": [
                    bochum01,
                    bochum02,
                ]
            },
            {
                "name": "186 Adley Dr (Brock / Adley)",
                "slug": "186-adley-dr-brock-adley",
                "preview": adleyPreview,
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
        "projects": [
            {
                "name": "DGER",
                "slug": "dger",
                "preview": dgerPreview,
                "id": "share-559ba316-cf9c-44be-aa75-0989704f9716"
            },
            {
                "name": "RAIN",
                "slug": "rain",
                "preview": rainPreview,
                "id": "share-89ab2288-9a1f-4d83-a515-71c5f3e04a35"
            },
            {
                "name": "NY262",
                "slug": "ny262",
                "preview": ny262Preview,
                "id": "share-e80e7fd1-b3db-48c4-b275-65a379dc47bc"
            },
            {
                "name": "AI Apartments Demo",
                "slug": "ai-apartments-demo",
                "preview": aiDemoPreview,
                "id": "share-e05b9063-5a00-43d1-b7e6-c97f09c31901"
            },
            {
                "name": "Trio Verde",
                "slug": "trio-verde",
                "preview": trioVerde3dPreview,
                "id": "share-75fb06ff-d0a8-47e5-8716-a4a2e7f23c17"
            }
        ]
    }
]