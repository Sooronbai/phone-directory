const PhoneList = ({ contacts, deleteContact, editContact }) => {
  return (
    <div className="p-4">
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <div
            key={index}
            className="flex justify-between gap-2 flex-wrap p-2 border-b"
          >
            <div>
              <h3 className="font-bold">{contact.name}</h3>
              <p>Мобильный телефон: {contact.mobile}</p>
              <p>Рабочий телефон: {contact.work}</p>
              <p>Отдел: {contact.department}</p>
              <p>Должность: {contact.position}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => editContact(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Редактировать
              </button>
              <button
                onClick={() => deleteContact(index)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Контакты отсутствуют</p>
      )}
    </div>
  );
};

export default PhoneList;
