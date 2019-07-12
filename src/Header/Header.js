import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';

import { getFormattedDate, getFormattedDateName, getCurrentMonth,getFormatedDate } from '../utils';

import styles from './Header.styles';

const getColumns = (numberOfDays, selectedDate) => {
  const columns = [];
  let initial = 0;
  if (numberOfDays === 7) {
    initial = 1;
    initial -= moment().isoWeekday();
  }
  for (let i = initial; i < (numberOfDays + initial); i += 1) {
    let date = moment(selectedDate);
    date = date.add(i, 'd');
    columns.push(date.toDate());
  }
  return columns;
};

const getFontSizeHeader = (numberOfDays) => {
  if (numberOfDays > 1) {
    return 12;
  }

  return 16;
};

const getDayTextStyles = (numberOfDays) => {
  const fontSize = numberOfDays === 7 ? 12 : 14;
  return {
    fontSize,
  };
};

const Column = ({
  column, numberOfDays, format, index
}) => {
  if (numberOfDays == 1) {
    return (
      <View style={styles.onedaycolumn}>
        <Text style={[styles.daynametext, getDayTextStyles(numberOfDays)]}>
          {getFormattedDateName(column, format)}
        </Text>
        <View style={styles.CircleShapeView}>
          <Text style={[styles.text, getDayTextStyles(numberOfDays), { color: '#FFFFFF' }]}>
            {getFormattedDate(column, format)}
          </Text>
        </View>
      </View>
    );
  } else {
      console.log(getFormatedDate(new Date()))
      console.log(getFormatedDate(column))
    let color = getFormatedDate(new Date()) == getFormatedDate(column) ? '#7ed221' : '#4A4A4A';
    return (
      <View style={styles.column}>
        <Text style={[styles.daynametext, getDayTextStyles(numberOfDays), { color: color }]}>
        
          {getFormattedDateName(column, format)}
        </Text>
        <Text style={[styles.text, getDayTextStyles(numberOfDays), { color: color }]}>
          {getFormattedDate(column, format)}
        </Text>
      </View>
    );
  }
};

const Columns = ({ columns, numberOfDays, format }) => {
  return (
    <View style={styles.columns}>
      {columns.map((column, index) => {
        return (
          <Column
            key={column}
            index={index}
            column={column}
            numberOfDays={numberOfDays}
            format={format}
          />
        );
      })}
    </View>
  );
};

const Title = ({ numberOfDays, selectedDate }) => { // eslint-disable-line react/prop-types
  return (
    <View style={styles.title}>
      <Text
        style={[styles.text, { fontSize: getFontSizeHeader(numberOfDays) }]}
      >
        {getCurrentMonth(selectedDate)}
      </Text>
    </View>
  );
};

const WeekViewHeader = ({
  numberOfDays, selectedDate, formatDate, style,
}) => {
  const columns = getColumns(numberOfDays, selectedDate);
  return (
    <View style={[styles.container, style]}>
      {numberOfDays == 1 ? null : <View style={styles.title} />}
      {/* <Title numberOfDays={numberOfDays} selectedDate={selectedDate} /> */}
      {columns && <Columns format={formatDate} columns={columns} numberOfDays={numberOfDays} />}
    </View>
  );
};

WeekViewHeader.propTypes = {
  numberOfDays: PropTypes.oneOf([1, 3, 7]).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  formatDate: PropTypes.string,
  style: PropTypes.object,
};

WeekViewHeader.defaultProps = {
  formatDate: 'MMM D',
};

export default WeekViewHeader;
