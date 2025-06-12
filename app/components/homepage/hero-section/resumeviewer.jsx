'use client';
import React from 'react';
import { personalData } from 'utils/data/personal-data.js';

export default function ResumeViewer() {
    // Extract the file ID from the Google Drive URL
    const fileIdMatch = personalData.resume.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;

    const resumeUrl = fileId
        ? `https://drive.google.com/file/d/${fileId}/preview`
        : null;

    return resumeUrl ? (
        <iframe
            src={resumeUrl}
            width="100%"
            height="800px"
            style={{ border: 'none' }}
            title="Resume"
        />
    ) : (
        <p>Resume not available</p>
    );
}
