import React, { useState } from 'react';

import './sidebar-styles.css';
import upArrow from '../../assets/icons/up-arrow.png';

interface Form {
  name: string;
  sort: string;
  score: string;
}

interface Props {
  resetData: () => void;
  filterData: (form: Form) => void;
}

const Sidebar: React.FC<Props> = (props) => {
  const [form, setForm] = useState({ name: '', score: '0', sort: 'date' });

  const fillForm = (type: string, text: string) => {
    setForm((prevForm) => ({ ...prevForm, [type]: text }));
  };

  const clearForm = () => {
    props.resetData();
    setForm({ name: '', score: '1', sort: '' });
  };

  const filterData = () => {
    props.filterData(form);
  };

  return (
    <div className='sidebar'>
      <div className='label' id='head-title'>
        Filter Results
      </div>
      <div className='sidebar-item'>
        <div className='label'>Name (contains)</div>
        <input
          id='name'
          type='text'
          className='input'
          value={form.name}
          onChange={(e) => fillForm('name', e.target.value)}
        />
      </div>
      <div className='responsive-pack'>
        <div id='first' className='sidebar-item'>
          <div className='label'>Minimum Score</div>
          <input
            id='score'
            type='text'
            className='input'
            value={form.score}
            onChange={(e) => fillForm('score', e.target.value)}
          />
        </div>
        <div id='second' className='sidebar-item'>
          <div className='label'>Order By</div>
          <div className='selection-container'>
            <div className='up-arrow-container'>
              {/* white up arrow PNG Designed By 588ku from <a href="https://pngtree.com">Pngtree.com</a> */}
              <img src={upArrow} alt='up' className='up-arrow' />
            </div>
            <select
              value={form.sort}
              className='selection'
              onChange={(e) => fillForm('sort', e.target.value)}
            >
              <option className='option' value='date'>
                Release Date
              </option>
              <option className='option' value='score'>
                Score
              </option>
              <option className='option' value='name'>
                Name
              </option>
            </select>
          </div>
        </div>
        <div className='button-container'>
          <button id='button' onClick={clearForm}>
            clear
          </button>
          <button id='button' onClick={filterData}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
