export default function Login() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <h1 className="text-center mb-4">Login</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Inserisci la tua email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Inserisci la password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Accedi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}