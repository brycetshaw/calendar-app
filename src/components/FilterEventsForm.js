import React, {useEffect, useState} from 'react';
import Form from "bootstrap";

const FilterEventsForm = ({tags}) => {

    return (
        <Form>
            {tags.map((tag) => (
                <Form.Check
                    type="checkbox"
                    disabled={tag.selected}
                    label={tag.name}
                    id={`${tag.id}`}

                />
            ))}
        </Form>
    )
}

export default FilterEventsForm;