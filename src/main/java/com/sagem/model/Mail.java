package com.sagem.model;

import lombok.Data;

@Data
public class Mail {
    private String emails;
    private String subject;
    private String content;
    private String file;
}
