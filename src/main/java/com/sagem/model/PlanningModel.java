package com.sagem.model;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PlanningModel {
    private List<Date> dates;
    private List<LineModel> lines;
}
