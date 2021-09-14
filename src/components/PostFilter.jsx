import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />

      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        value={filter.sort}
        onChange={(selecredSort) =>
          setFilter({ ...filter, sort: selecredSort })
        }
      />
    </div>
  );
}
