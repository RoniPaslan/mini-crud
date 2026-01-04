import Swal from "sweetalert2";

export const successAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    timer: 1500,
    showConfirmButton: false,
  });
};

export const errorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
};

export const confirmDelete = async () => {
  return Swal.fire({
    title: "Are you sure?",
    text: "This data will be permanently deleted",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    confirmButtonText: "Yes, delete",
  });
};
