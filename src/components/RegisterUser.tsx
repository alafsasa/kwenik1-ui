export const RegisterUser = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-7 position-absolute h-100">
                    <div className="kwenik-register-ad-image">
                        <img src="https://res.cloudinary.com/unloccode/image/upload/v1667928833/kwenik_samsung-galaxys20ultra-cosmicblack-portrait_k2fqad.png" alt="kwenik" height={600} width={300} />
                    </div>
                </div>
                <div className="col-sm-5 position-absolute h-100 offset-sm-7">
                    <div className="kwenik-register-forms">
                        <div className="card kwenik-form-one">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3 mt-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Confirm password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Town" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Country" disabled />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-3 kwenik-form-one">
                            <div className="card-body">
                                <div className="mb-3 mt-3">
                                    <button className="btn btn-success w-100">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}