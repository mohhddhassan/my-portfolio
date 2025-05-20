'use client';
import React from 'react';
import { personalData } from 'utils/data/personal-data.js';

export default function ResumeViewer() {
    // Transform your drive resume link into direct link:
    const resumeUrl = personalData.resume.replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=view&id="
    ).replace("/view?usp=drive_link", "");

    return (
        <iframe
            src={resumeUrl}
            width="100%"
            height="800px"
            style={{ border: 'none' }}
            title="Resume"
        />
    );
}
