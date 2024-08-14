import React from 'react'
import { motion } from 'framer-motion'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './styles/style.css'
const TecIcons = () => {

    const handleOpen = () => {
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        document.body.style.overflow = '';
    };
    return (
        <div className='flex flex-col gap-3 overflow-scroll  '>
            <div className='flex flex-wrap gap-3 '>
                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* HTML */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /></svg>
                    </div>
                } position="right center"
                >
                    <p>
                        HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It is the embedded in the web browser and helps the browser understand the structure of the web page.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* CSS */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" /><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" /></svg>
                    </div>
                } position="right center"
                >
                    <p>
                        CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* TAILWIND */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" /></svg>
                    </div>
                } position="top center"
                >
                    <p>
                        Tailwind CSS is a utility-first CSS framework, designed to enable quicker development and better maintainability for web projects.
                    </p>
                </Popup>


                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Bootstrap */}
                        <svg
                            className='duration-300 hover:rotate-45'
                            height="48" viewBox="0 0 512 407.864" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z" fill="#7952b3" fillRule="evenodd" /></svg>
                    </div>
                } position="top center"
                >
                    <p> Bootstrap is a popular open-source front-end web framework for building responsive and mobile-first websites.</p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* GIT*/}
                        <svg className="hover:rotate-45 duration-300"
                            width="48" height="48" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36" /></svg>
                    </div>
                } position="right center"
                >
                    <p>
                        Git is a distributed version control system.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Docker*/}
                        <svg className="hover:rotate-45 duration-300"
                            height="48" viewBox="-.557 117.607 598.543 423.631" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="#0091e2"><path d="m592.162 277.804c-1.664-1.37-16.642-12.597-48.815-12.597-8.321 0-16.92.822-25.24 2.191-6.102-41.898-41.327-62.162-42.714-63.257l-8.598-4.93-5.547 7.942c-6.934 10.68-12.204 22.729-15.255 35.052-5.824 23.824-2.219 46.279 9.985 65.447-14.7 8.216-38.553 10.133-43.545 10.406h-393.853c-10.262 0-18.583 8.216-18.583 18.348-.554 33.956 5.27 67.912 17.197 99.951 13.59 35.052 33.838 61.067 59.91 76.95 29.4 17.799 77.383 27.931 131.468 27.931 24.408 0 48.815-2.19 72.946-6.572 33.56-6.025 65.734-17.526 95.412-34.23a260.485 260.485 0 0 0 64.902-52.577c31.342-34.778 49.925-73.663 63.515-108.167h5.547c34.116 0 55.195-13.418 66.844-24.92 7.766-7.12 13.59-15.882 17.751-25.74l2.497-7.12z" /><path d="m55.193 306.83h52.698c2.497 0 4.716-1.916 4.716-4.654v-46.553c0-2.465-1.942-4.655-4.716-4.655h-52.698c-2.496 0-4.715 1.916-4.715 4.655v46.553c.277 2.738 2.219 4.655 4.715 4.655zm72.668 0h52.699c2.496 0 4.715-1.916 4.715-4.654v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.7c-2.496 0-4.715 1.916-4.715 4.655v46.553c.278 2.738 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 1.942 4.655 4.715 4.655zm72.946 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 2.219 4.655 4.715 4.655zm-147-66.543h52.698c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c.278 2.464 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 1.942 4.655 4.715 4.655m72.946 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m0-66.817h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m73.5 133.36h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.941-4.655-4.715-4.655h-52.698c-2.497 0-4.716 1.916-4.716 4.655v46.553c.278 2.738 2.22 4.655 4.716 4.655" /></g></svg>
                    </div>
                } position="right center"
                >
                    <p>
                        Docker is a platform for developing, shipping, and running applications in containers.
                    </p>
                </Popup>

                {/* </div> */}


                {/* <div className='flex gap-3'> */}
                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Framer Motion */}
                        <svg
                            className="hover:rotate-45 duration-300"
                            height="48" viewBox="3.7 3.7 43.6 43.6" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d" /><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" /><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" /></svg>
                    </div>
                } position="top center"
                >
                    <p>
                        Framer Motion is a powerful library for creating animations and interactions in React applications.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Next */}
                        <svg
                            className="hover:rotate-45 duration-300"
                            height="48" preserveAspectRatio="xMidYMid" viewBox="0 0 512 308.883" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675h-97.574zm105.22 0h10.26l45.467 63.423 46.473-63.424 63.211-80.56-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676v-7.677h110.048v7.676h-50.699v136.54h-8.852v-136.539zm-344.928-7.677h11.065l152.58 228.323-63.053-84.107-91.338-133.308-.402 133.31h-8.852zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z" /></svg>
                    </div>
                } position="left center"
                >
                    <p>
                        Next.js is a React framework for building performant web applications.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Socket IO */}
                        <svg
                            className="hover:rotate-45 duration-300"
                            width="48" height="48" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M96.447 7.382c32.267-8.275 67.929-3.453 96.386 14.11 35.84 21.433 59.238 61.976 59.833 103.71 1.31 42.15-20.659 83.944-55.963 106.865-39.293 26.433-93.648 27.446-133.775 2.322-40.9-24.41-64.774-73.645-58.641-120.916 4.94-49.95 43.52-94.005 92.16-106.09z" fill="#010101" /><path d="M91.505 27.803c60.964-24.41 135.74 20.658 142.05 86.028 9.824 58.82-38.995 118.593-98.59 120.32-56.677 5.656-111.449-42.39-113.056-99.304-4.227-46.08 26.136-91.803 69.596-107.044z" fill="#FFF" /><path d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z" fill="#010101" /></svg>
                    </div>
                } position="right center"
                >
                    <p>
                        Socket.io is a library for real-time web applications.
                    </p>
                </Popup>



                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* NodeJs*/}
                        <svg className="hover:rotate-45 duration-300"
                            width="48" height="48" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#8CC84B"><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" /><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" /></g></svg>
                    </div>
                } position="top center"
                >
                    <p>
                        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className=" flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Javascript */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z" /><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" /></svg>
                    </div>
                } position="top center"
                >
                    <p>
                        JavaScript is a high-level, dynamic, and interpreted programming language primarily used for web development.
                    </p>
                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className=" flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* react */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z" /><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z" /><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z" /><circle cx="24" cy="24" r="4" fill="#80deea" /></svg>
                    </div>
                } position="left center"
                >
                    <p>
                        React is a JavaScript library for building user interfaces.
                    </p>

                </Popup>




                {/* 
            </div> */}

                {/* <div className='flex gap-3'> */}


                <Popup onClose={handleClose} onOpen={handleOpen} trigger=
                    {
                        <div className=" rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                            {/* Python */}
                            <svg className="hover:rotate-45 duration-300"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
                        </div>
                    }
                    position="right center">
                    <p>
                        Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
                    </p>

                </Popup>

                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* FastApi */}
                        <svg className="hover:rotate-45 duration-300"
                            fill="none" height="48" width="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 154"><circle cx="77" cy="77" fill="#05998b" r="77" /><path d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z" fill="#fff" /></svg>
                    </div>
                } position="top center"
                > <p>
                        FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.
                    </p>

                </Popup>
                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* PHP */}
                        <svg className="hover:rotate-45 duration-300"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path d="M47.73,25C46.003,18.692,36.2,14,24,14S1.997,18.692,0.27,25H0v2c0,7.29,10.542,13,24,13s24-5.71,24-13v-2H47.73z" /><ellipse cx="24" cy="25" fill="#fff" rx="23" ry="12" /><path d="M31.028,20L29,31h2.646l0.527-3h1.646c3.446,0,5.321-0.798,6.022-3.756C40.444,21.703,38.903,20,36.361,20H31.028z M34.256,26h-1.71l0.755-4h2.061c1.708,0,2.067,0.77,1.978,1.627C37.111,25.833,35.736,26,34.256,26z" /><path d="M10.028,20L8,31h2.646l0.527-3h1.646c3.446,0,5.321-0.798,6.022-3.756C19.444,21.703,17.903,20,15.361,20H10.028z M13.256,26h-1.71l0.755-4h2.061c1.708,0,2.067,0.77,1.978,1.627C16.111,25.833,14.736,26,13.256,26z" /><path d="M28.71,20.727C28.145,20.209,27.149,20,25.664,20h-2.339l0.834-4h-2.624l-2.507,12h2.625l1.266-6h2.098	c0.669,0,1.111,0.112,1.317,0.333c0.205,0.223,0.25,0.643,0.131,1.251L25.507,28h2.666l1.038-4.778	C29.434,22.077,29.265,21.237,28.71,20.727z" /><path d="M24,38C10.542,38,0,32.29,0,25s10.542-13,24-13s24,5.71,24,13S37.458,38,24,38z M24,14C12.075,14,2,19.037,2,25	s10.075,11,22,11s22-5.037,22-11S35.925,14,24,14z" /></svg>
                    </div>
                } position="top center"
                >
                    <p>
                        PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.                    </p>
                </Popup>
                <Popup onClose={handleClose} onOpen={handleOpen} trigger={
                    <div className="rounded-lg bg-slate-200 dark:bg-slate-400 p-2 text-sm cursor-pointer  text-white hover:bg-white dark:hover:bg-slate-300">
                        {/* Laravel */}
                        <svg className="hover:rotate-45 duration-300"
                            height="48" viewBox="0 -.11376601 49.74245785 51.31690859" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20" /></svg>
                    </div>
                } position="top center"
                >
                    <p>Laravel is a web application framework with expressive, elegant syntax. </p>
                </Popup>





            </div>

        </div>
    )
}

export default TecIcons