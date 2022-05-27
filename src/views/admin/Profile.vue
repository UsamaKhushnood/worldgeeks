<template>
  <div class="admin-profile p-3">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title mb-0">Edit Profile</h4>
            <p class="card-category mb-0">Complete your profile</p>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="row flex-column">
                    <div class="col-12">
                      <h5 class="card-title">Change Name</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">First Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Last Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="primary" size="sm">Update</b-button>
                    </div>
                    <div class="col-12">
                      <h5 class="card-title">Change Email</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Email address</label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="primary" size="sm">Update</b-button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="row flex-column">
                    <div class="col-12">
                      <h5 class="card-title">Change Password</h5>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">Old Password</label>
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating">New Password</label>
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="bmd-label-floating"
                          >Confirm Password</label
                        >
                        <input type="password" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-8 text-right">
                      <b-button variant="danger" size="sm">Update</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
