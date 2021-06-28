package com.sagem.sec;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="walid.gritli@esprit.tn";
    public static final long EXPIRATION= 10*24*3600*1000;
            //1000 * 60 * 60 * 24 * 200;
            //10*24*3600*1000;
    public static final String HEADER_PREFIX="Bearer ";
}
