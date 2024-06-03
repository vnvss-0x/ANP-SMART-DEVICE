import PropTypes from "prop-types";

const ConfirmDeleteDialog = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10 max-w-md mx-auto">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Confirm Deletion
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Are you sure you want to delete this ?
                    </p>
                </div>
                <div className="flex justify-end px-6 py-4 bg-gray-100 dark:bg-gray-700">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-md mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmDeleteDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ConfirmDeleteDialog;
