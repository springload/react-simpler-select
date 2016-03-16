import React from 'react';

export default React.createClass({
    displayName: 'ReactSimplerSelect',

    propTypes: {
        id: React.PropTypes.string,
        className: React.PropTypes.string,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.any,
        groups: React.PropTypes.array,
        options: React.PropTypes.array,
        onChange: React.PropTypes.func.isRequired,
        required: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            id: null,
            className: null,
            name: null,
            placeholder: null,
            value: null,
            groups: null,
            options: [],
            required: false,
        };
    },

    handleChange(e) {
        const value = parseInt(e.target.value, 10);
        //const selectedOption = _.find(this.props.options, { value: value });

        this.props.onChange(value);
    },

    renderOption(option) {
        return (
            <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
            >
                {option.label}
            </option>
        );
    },

    renderChildren() {
        const { options, placeholder, groups } = this.props;
        const children = [];

        if (placeholder) {
            children.push(this.renderOption({ key: 'placeholder', value: '', disabled: true, label: placeholder }));
        }

        if (groups) {
            groups.forEach((group) => {
                const groupOptions = [];

                options.forEach((item) => {
                    if (group.groupId === item.groupId) {
                        groupOptions.push(this.renderOption(item));
                    }
                });

                if (!groupOptions.length) {
                    return;
                }

                children.push(
                    <optgroup label={group.title}  key={group.groupId}>{groupOptions}</optgroup>
                );
            });
        } else {
            options.forEach((item) => {
                children.push(this.renderOption(item));
            });
        }

        return children;
    },

    render() {
        const { className, required } = this.props;

        return (
            <select
                className={className}
                id={this.props.id}
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
                required={required}
            >
                {this.renderChildren()}
            </select>
        );
    },
});
