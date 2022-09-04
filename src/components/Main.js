import ItemListContainer from "../containers/ItemListContainer.js";
import ItemDetailContainer from "../containers/ItemDetailContainer.js";

const Main = () => {
    return (
        <>
        <main>
            {/* <ItemListContainer greeting='Bienvenido a GPDudes!' /> */}
            <ItemDetailContainer />
        </main>
        </>
    );
};

export default Main;

//EXPORTED TO: App.js