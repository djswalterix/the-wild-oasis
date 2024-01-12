import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button> Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );

  // const [isOpenModal, setisOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => setisOpenModal((show) => !show)}>
  //       Add New Cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setisOpenModal(false)}>
  //         <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
