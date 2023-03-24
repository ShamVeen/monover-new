import React from 'react';
import upload from '../images/icons/upload-icon.svg';

function FilesUpload() {
  return (
    <div>
        
    <div class="container-fluid">
        <div class="row">
            <div class="main-section col-sm min-vh-100 pe-0 ps-0">
                {/* <!-- content --> */}
                <div class="content">
                    <div class="main-content w-100 px-5">
                        <div class="content-wrapper mt-4">
                            <form method="post" action="" enctype="multipart/form-data">
                                <div class="upload-zone d-flex flex-column justify-content-center align-items-center" id="drop-zone">
                                    <div class="text-center">
                                        <img src={upload} alt=""/>
                                        <p class="upload-zone-text mt-5">DRAG AND DROP YOUR FILES ANYWHERE OR </p>
                                        <div id="clickHere">
                                            <input type="file" name="file" id="file" multiple />
                                        </div>
                                    </div>
                                    <div class="uploadedFiles align-self-start">
                                        <div id="filename" class="playlists droppable"></div>
                                    </div>
                                </div>
                                <div class="upload-zone-buttons d-flex mt-3 justify-content-between w-100">
                                    <button class="btn btn-success btn-lg w-90 me-3" type="submit">Upload Files</button>
                                    <button class="btn btn-primary btn-lg w-90 ms-3">Upload Batch</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilesUpload