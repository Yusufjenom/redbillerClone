import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Test() {
  return (

    <div class="row g-5 g-xl-10">
      
      {/* start */}
      <div class="col-xl-4 mb-xl-10">

        <div class="card h-xl-100">

          <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-gray-900">Recommended for you</span>
              <span class="text-muted mt-1 fw-semibold fs-7">8k social visitors</span>
            </h3>

            <div class="card-toolbar">
              <a href="#" class="btn btn-sm btn-light">All Courses</a>
            </div>

          </div>

          <div class="card-body pt-6">

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-danger text-inverse-danger">M</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">UI/UX Design</a>
                  <span class="text-muted fw-semibold d-block fs-7">40+ Courses</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

            <div class="separator separator-dashed my-4"></div>

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-success text-inverse-success">Q</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">QA Analysis</a>
                  <span class="text-muted fw-semibold d-block fs-7">18 Courses</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

            <div class="separator separator-dashed my-4"></div>

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-info text-inverse-info">W</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Web Development</a>
                  <span class="text-muted fw-semibold d-block fs-7">120+ Courses</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

            <div class="separator separator-dashed my-4"></div>

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-primary text-inverse-primary">M</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Marketing</a>
                  <span class="text-muted fw-semibold d-block fs-7">50+ Courses.</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

            <div class="separator separator-dashed my-4"></div>

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-warning text-inverse-warning">P</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Philosophy</a>
                  <span class="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

            <div class="separator separator-dashed my-4"></div>

            <div class="d-flex flex-stack">

              <div class="symbol symbol-40px me-4">
                <div class="symbol-label fs-2 fw-semibold bg-dark text-inverse-dark">M</div>
              </div>

              <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                <div class="flex-grow-1 me-2">
                  <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Mathematics</a>
                  <span class="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                </div>

                <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                  <i class="ki-outline ki-arrow-right fs-2"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


        {/* start */}

      <div class="col-xl-8 mb-5 mb-xl-10">

        <div class="card card-flush h-xl-100">

          <div class="card-header pt-5">

            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-gray-900">Team Schedule</span>
              <span class="text-gray-500 pt-2 fw-semibold fs-6">49 Acual Tasks</span>
            </h3>

            <div class="card-toolbar">

              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active" data-kt-timeline-widget-1="tab" data-bs-toggle="tab" href="#kt_timeline_widget_1_tab_day">Day</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-kt-timeline-widget-1="tab" data-bs-toggle="tab" href="#kt_timeline_widget_1_tab_week">Week</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-kt-timeline-widget-1="tab" data-bs-toggle="tab" href="#kt_timeline_widget_1_tab_month">Month</a>
                </li>
              </ul>

            </div>

          </div>

          <div class="card-body pb-0">

            <div class="tab-content">

              <div class="tab-pane active" id="kt_timeline_widget_1_tab_day" role="tabpanel" aria-labelledby="day-tab" data-kt-timeline-widget-1-blockui="true">
                <div class="table-responsive pb-10">

                  <div id="kt_timeline_widget_1_1" class="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-1-image-root="assets/media/"></div>

                </div>
              </div>

              <div class="tab-pane" id="kt_timeline_widget_1_tab_week" role="tabpanel" aria-labelledby="week-tab" data-kt-timeline-widget-1-blockui="true">
                <div class="table-responsive pb-10">

                  <div id="kt_timeline_widget_1_2" class="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-1-image-root="assets/media/"></div>

                </div>
              </div>

              <div class="tab-pane" id="kt_timeline_widget_1_tab_month" role="tabpanel" aria-labelledby="month-tab" data-kt-timeline-widget-1-blockui="true">
                <div class="table-responsive pb-10">

                  <div id="kt_timeline_widget_1_3" class="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-1-image-root="assets/media/"></div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Test;



