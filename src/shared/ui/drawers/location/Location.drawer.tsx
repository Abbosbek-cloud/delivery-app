import React, { useState, useCallback } from "react";
import {
  Button,
  Drawer,
  DrawerProps,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { IconLocationFilled } from "@tabler/icons-react";
import classes from "./Location.module.css";

interface LocationState {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface LocationDrawerProps extends Pick<DrawerProps, "opened" | "onClose"> {
  onSubmit?: (location: LocationState) => void;
  defaultLocation?: Partial<LocationState>;
}

const DEFAULT_LOCATION: LocationState = {
  latitude: 41.311158,
  longitude: 69.279737,
  zoom: 15,
};

const LocationDrawer: React.FC<LocationDrawerProps> = ({
  opened,
  onClose,
  onSubmit,
  defaultLocation = {},
}) => {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [location, setLocation] = useState<LocationState>({
    ...DEFAULT_LOCATION,
    ...defaultLocation,
  });
  const [error, setError] = useState("");

  const handleLocationError = useCallback((message: string) => {
    setLoadingLocation(false);
    setError(message);
  }, []);

  const getLocation = useCallback(() => {
    setLoadingLocation(true);
    setError("");

    if (!("geolocation" in navigator)) {
      handleLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 18,
        };
        setLocation(newLocation);
        setLoadingLocation(false);
      },
      (error) =>
        handleLocationError(error.message || "Geolocation is not available.")
    );
  }, [handleLocationError]);

  const handleSubmit = () => {
    onSubmit?.(location);
    onClose();
  };

  const mapState: ymaps.IMapState = {
    center: [location.latitude, location.longitude],
    zoom: location.zoom,
  };

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="bottom"
      title={<Text fw={700}>Select address</Text>}
      classNames={{ body: classes.drawer__body }}
      size="510px"
    >
      <Stack>
        <YMaps query={{ csp: true, ns: undefined }}>
          <Map
            defaultState={mapState}
            state={mapState}
            className={classes.location__map__container}
          >
            <Button
              onClick={getLocation}
              className={classes.map__location__button}
              loading={loadingLocation}
              variant="filled"
            >
              <IconLocationFilled
                style={{
                  width: "16px",
                  height: "16px",
                  opacity: 0.7,
                }}
              />
            </Button>
            <ZoomControl
              options={{
                position: {
                  top: "10px",
                  right: "10px",
                },
              }}
            />
            <Placemark geometry={[location.latitude, location.longitude]} />
          </Map>
        </YMaps>

        {location.latitude && location.longitude && (
          <TextInput label="Manzil" placeholder="Manzil nomini kiriting" />
        )}

        {error && <Text c="red">{error}</Text>}

        <Group justify="space-between">
          <Button variant="outline" color="orange" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="filled" onClick={handleSubmit} color="orange">
            Submit
          </Button>
        </Group>
      </Stack>
    </Drawer>
  );
};

export default LocationDrawer;
