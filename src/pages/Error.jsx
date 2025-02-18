import MainNav from "../components/MainNav";

function ErrorPage() {
    return (
        <>
            <MainNav />
            <main>
                <h1>an error occurided !</h1>
                <p>Could not find this page</p>
            </main>
        </>
    );
}


export default ErrorPage;
