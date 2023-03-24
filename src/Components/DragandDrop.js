import React from 'react';

function DragandDrop() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="main-section col-sm min-vh-100 pe-0 ps-0">
            {/* <!-- content --> */}
            <div className="content">
              <div className="main-content w-100 px-5">
                <div className="content-wrapper mt-4">
                  <form method="post" action="" enctype="multipart/form-data">
                    <div
                      className="upload-zone d-flex flex-column justify-content-center align-items-center"
                      id="drop-zone"
                    >
                      <div className="text-center">
                        <img src="images/icons/upload-icon.svg" alt="" />
                        <p className="upload-zone-text mt-5">
                          DRAG AND DROP YOUR FILES ANYWHERE OR{' '}
                        </p>
                        <div id="clickHere">
                          <input type="file" name="file" id="file" multiple />
                        </div>
                      </div>
                      <div className="uploadedFiles align-self-start">
                        <div
                          id="filename"
                          className="playlists droppable"
                        ></div>
                      </div>
                    </div>
                    <div className="upload-zone-buttons d-flex mt-3 justify-content-between w-100">
                      <button
                        className="btn btn-success btn-lg w-90 me-3"
                        type="submit"
                      >
                        Upload Files
                      </button>
                      <button className="btn btn-primary btn-lg w-90 ms-3">
                        Upload Batch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragandDrop;
